import { Factory, Seeder } from 'typeorm-seeding'
import { DataSource } from 'typeorm'

import { AirportEntity } from 'database/entities/entity/airport.entity'
import { airportData } from '../data/airport.data'

export class AirportSeeder implements Seeder {
    async run(_factory: Factory, dataSource: DataSource): Promise<void> {
        try {
            const repository = dataSource.getRepository(AirportEntity)

            await Promise.all(
                airportData.map(async (airportData) => {
                    // const exists = await repository
                    //     .findOne({
                    //         where: {
                    //             name: supportProductData.name
                    //         }
                    //     })
                    //     .catch((e) =>
                    //         console.error('supportProductData Validation Error', e)
                    //     )
                    // if (exists) return
                    // await repository.insert(supportProductData)
                })
            )
        } catch (error) {
            return console.error(
                `❌ ~ file: airport.seed.ts ~ AirportSeeder ~ run ~ error: `,
                error
            )
        }
    }
}
