import logger from './libs/logger.lib'
import bootstrap from './bootstrap'
import { createServer, Server } from 'http'
import app from './app'
import { serverConfig } from './config'

const server: Server = createServer(app)
const { port } = serverConfig

bootstrap(server, () => {
	server.listen(port, async () => {
		logger.info(`🚀 Server running at port ${port}`)
	})
}).catch((error) => {
	console.error({ error })
})
