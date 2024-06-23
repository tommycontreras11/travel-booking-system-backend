import 'dotenv/config'

const isTest = process.env.NODE_ENV == 'test'
const isProd = ['production', 'prod'].includes(`${process.env.NODE_ENV}`)
const isLive = isProd || ['staging'].includes(`${process.env.NODE_ENV}`)

export const serverConfig = {
	isProd,
	isLive,
	isTest,
	isDev: false,
	port: parseInt(`${process.env.PORT}`),
	nodeEnv: process.env.NODE_ENV as string,
	name: process.env.NAME as string,
	appUrl: ''
}
