import 'reflect-metadata'

import { DataSource } from 'typeorm'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import ormconfig from './../../config/ormconfig'

const connection: DataSource = new DataSource(ormconfig as MysqlConnectionOptions)

export const connectDatabase = () => {
    return new Promise(async (resolve, _reject) => {
        console.log(`Connecting to database ⌛`)
        try {
            await connection.initialize()
            console.log(`Database connected 🔥`)
            resolve(true)
        } catch (error) {
            console.error('connectDatabase -> error: ', error)
            throw error
        }        
    })
}

export default connection
