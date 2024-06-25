import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

import { AirportEntity } from "../../entities/entity/airport.entity";
import { airportData } from "../data/airport.data";
import { CountryEntity } from "../../entities/entity/country.entity";

export class AirportSeeder implements Seeder {
  async run(_factory: Factory, dataSource: DataSource): Promise<void> {
    try {
        const countryRepository = dataSource.getRepository(CountryEntity);
        const airportRepository = dataSource.getRepository(AirportEntity);
  
        for (const airport of airportData) {
          const findCountry = await countryRepository.findOne({
            where: { value: airport.country },
          }).catch((e) =>
            console.error(
              "Validation Error at countryRepository.findOne AirportSeeder",
              e
            )
          );
  
          if (findCountry) {
            for (const airports of airport.airports) {
              const exists = await airportRepository.findOne({
                where: {
                  value: airports.name,
                },
              }).catch((e) =>
                console.error(
                  "Validation Error at airportRepository.findOne AirportSeeder",
                  e
                )
              );
  
              if (exists) continue;
  
              const newAirport = airportRepository.create({
                value: airports.name,
                countryId: findCountry.id,
              });
  
              await airportRepository.save(newAirport).catch((e) =>
                console.error(
                  "Error saving new AirportEntity",
                  e
                )
              );
            }
          }
        }
    } catch (error) {
      return console.error(
        `❌ ~ file: airport.seed.ts ~ AirportSeeder ~ run ~ error: `,
        error
      );
    }
  }
}
