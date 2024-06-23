import { join } from 'path'
import { createLogger, format, transports } from 'winston'
import { serverConfig } from './../config'

const logger = createLogger({
    format: format.combine(
        format.splat(),
        format.timestamp(),
        format.simple(),
        format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console({ level: 'debug' })]
})

if (serverConfig?.isLive) {
    logger.clear()
    logger.add(
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: join(__dirname, '/../../logs/console.log')
        })
    )
}

export default logger
