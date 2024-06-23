import { cookieConfig, serverConfig } from './../../config'
import logger from './../../libs/logger.lib';
import { Response } from 'express';
import jwt from 'jsonwebtoken';

interface CookieConfig {
    password: string;
    prefix: string;
    ttlExpire: number;
    isLive: boolean;
    names: {
        public: string;
    };
}

class Cookie {

    private static _instance: Cookie;

    private config: CookieConfig;
    private constructor() { }
    public static get instance(): Cookie {
        !Cookie._instance && (Cookie._instance = new Cookie())
        return Cookie._instance
    }

    public setConfiguration() {
        this.config = {
            ...cookieConfig,
            isLive: serverConfig.isLive
        };
        logger.info('🎊 COOKIE: EXPRESS')
    }

    public getToken(token: string, name = this.config.names.public) {
        const indexStart = token.indexOf(name);
        const indexEnd = token.indexOf(';', indexStart);
        const tokenSlice = token.slice(indexStart, (indexEnd == -1 ? token.length : indexEnd));
        return tokenSlice.split("=")[1];
    }

    public getPayload<T>(token: string): T | null {
        try {
            return jwt.verify(token, this.config.password) as T;
        } catch (error) {
            return null;
        }
    }

    public setCookie(payload: string | object) {

        const token = jwt.sign(
            payload,
            this.config.password,
        );

        return {
            token: `${token.encrypt()}`,
        }
    }

    public clearCookie(res: Response, name = this.config.names.public) {
        return res.clearCookie(name, {
            expires: new Date(-1),
            httpOnly: true,
            secure: this.config.isLive || true,
            sameSite: 'none'
        });
    }

}

export default Cookie;