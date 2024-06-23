import { signInService } from "./../../services/user/signIn.service";
import { statusCode } from "./../../utils/statusCode.util";
import { Request, Response } from "express";

import jsonwebtoken from 'jsonwebtoken'

export const signInController = async (req: Request, res: Response) => {
    signInService(req.body).then(data => {
        const tokenExpiration = new Date(Date.now() + 1000 * 60 * 60 * 24)
        const originalToken = jsonwebtoken.sign({ userId: data.uuid, expiration: tokenExpiration }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '24h' })
        
        return res.cookie('access_token', originalToken, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            expires: tokenExpiration
        }).status(statusCode.OK).json({ originalToken })
    }).catch(e => {
        return res.status(e.status ?? statusCode.INTERNAL_SERVER_ERROR).json({ message: e.message })
    })
}