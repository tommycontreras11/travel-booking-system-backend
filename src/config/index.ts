import dotenv from 'dotenv'
import { serverConfig } from './general'

dotenv.config({
	path:
		process.env.NODE_ENV !== undefined
			? `.env.${process.env.NODE_ENV.trim()}`
			: '.env'
})

export const cookieConfig = {
	password: process.env.COOKIE_PASSWORD as string,
	prefix: process.env.COOKIE_PREFIX as string,
	ttlExpire: parseFloat(`${process.env.COOKIE_TTL_EXPIRE}`),
	names: {
		public: (process.env.COOKIE_PUBLIC_NAME as string).trim(),
	}
}

serverConfig.appUrl = process.env.APP_URL as string
serverConfig.isDev = serverConfig.appUrl.includes("localhost")

export { serverConfig }