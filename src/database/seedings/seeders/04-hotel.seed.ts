import { CountryEntity } from "./../../../database/entities/entity/country.entity";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { hotelData } from "../data/hotel";
import { HotelEntity } from "./../../../database/entities/entity/hotel.entity";

export class HotelSeeder implements Seeder {
  async run(_factory: Factory, dataSource: DataSource): Promise<void> {
    try {
      const hotelRepository = dataSource.getRepository(HotelEntity);
      const countryRepository = dataSource.getRepository(CountryEntity);

      await Promise.all(
        hotelData.map(async (hotel) => {
          const exists = await hotelRepository
            .findOne({
              where: { name: hotel.name },
            })
            .catch((e) =>
              console.error(
                "Validation Error at hotelRepository.findOne HotelSeeder",
                e
              )
            );

          if (exists) return;

          const findCountry = await countryRepository.findOne({
            where: { value: hotel.country },
          }).catch((e) =>
            console.error(
              "Validation Error at countryRepository.findOne HotelSeeder",
              e
            )
          );

          if(findCountry) {
            await hotelRepository
            .insert({
              name: hotel.name,
              address: hotel.address,
              city: hotel.city,
              countryId: findCountry.id,
              stars: hotel.stars,
              pricePerNight: hotel.pricePerNight,
              availableSlot: hotel.availableSlot,
            })
            .catch((e) => console.error("Error saving new HotelSeeder", e));
          }
        })
      );
    } catch (error) {
      return console.error(
        `❌ ~ file: hotel.seed.ts ~ HotelSeeder ~ run ~ error: `,
        error
      );
    }
  }
}
