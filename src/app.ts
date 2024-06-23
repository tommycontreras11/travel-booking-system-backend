global.rootDir = __dirname

import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import router from './routers'

const app = express()

app.use(cookieParser())

app.use(
	cors({
		origin: (_, next) => next(null, true),
		credentials: true,
	})
)

app.use(express.json())

app.use(morgan('dev'))

app.use(router)

export default app
