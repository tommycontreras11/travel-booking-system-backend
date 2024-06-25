import { DataSource } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import { CountryEntity } from '../../entities/entity/country.entity'
import { countryData } from '../data/country'

export class CountrySeeder implements Seeder {
    async run(_factory: Factory, dataSource: DataSource): Promise<void> {
        try {
            const repository = dataSource.getRepository(CountryEntity)

            await Promise.all(
                countryData.map(async (country) => {
                    const exists = await repository
                        .findOne({
                            where: {
                                value: country.value
                            }
                        })
                        .catch((e) =>
                            console.error('Validation Error at CountryEntity.findOne CountrySeeder', e)
                        )
                    if (exists) return
                    await repository.insert(country)
                })
            )
        } catch (error) {
            return console.error(
                `❌ ~ file: country.seed.ts ~ CountrySeeder ~ run ~ error: `,
                error
            )
        }
    }
}
