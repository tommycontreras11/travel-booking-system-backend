import path from 'path'
import dotenv from 'dotenv'
import { serverConfig } from './../config'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

serverConfig && {}

dotenv.config({
	path:
		process.env.NODE_ENV !== undefined
			? `.env.${process.env.NODE_ENV.trim()}`
			: '.env'
})

export default {
	metadataTableName: 'typeorm-metadata',
	name: process.env.DB_NAME as string,
	type: 'mysql',
	host: process.env.DB_HOST as string,
	port: parseInt(`${process.env.DB_PORT}`),
	username: process.env.DB_USERNAME as string,
	password: process.env.DB_PASSWORD as string,
	database: process.env.DB_DATABASE as string,
	ssl: process.env.DB_EXTRA_SSL === 'true',
	schema: process.env.DB_SCHEMA || 'public',
	synchronize: process.env.DB_SYNCHRONIZE === 'true',
	logging: process.env.DB_LOGGING === 'true',
	autoReconnect: process.env.DB_AUTO_RECONNECT === 'true',
	reconnectTries: parseInt(`${process.env.DB_AUTO_RECONNECT_TRIES}`),
	reconnectInterval: parseInt(
		`${process.env.DB_AUTO_RECONNECT_INTERVAL}`
	),
	entities: [
		path.join(__dirname, '/../database/entities/**/*.{entity,view}.{ts,js}'),
	],
	migrations: [path.join(__dirname, '/../database/migrations/*.{ts,js}')],
	seeds: [path.join(__dirname, '/../database/seeding/seeds/*.seed.{ts,js}')],
	factories: [
		path.join(__dirname, '/../database/seeding/factories/*.factory.{ts,js}')
	],
	subscribers: [path.join(__dirname, '/../database/subscribers/*.{ts,js}')],
	cli: {
		entitiesDir: path.join(__dirname, '/../database/entities'),
		migrationsDir: path.join(__dirname, '/../database/migrations'),
		subscribersDir: path.join(__dirname, '/../database/subscribers')
	},
	cache: {
		duration: 300000
	}
} as MysqlConnectionOptions
