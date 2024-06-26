import { FlightEntity } from "./../../../database/entities/entity/flight.entity";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { flightData } from "../data/flight";

export class FlightSeeder implements Seeder {
  async run(_factory: Factory, dataSource: DataSource): Promise<void> {
    try {
      const flightRepository = dataSource.getRepository(FlightEntity);

      await Promise.all(
        flightData.map(async (flight) => {
          const exists = await flightRepository
            .findOne({
              where: { flightNumber: flight.flightNumber },
            })
            .catch((e) =>
              console.error(
                "Validation Error at flightRepository.findOne FlightSeeder",
                e
              )
            );

          if (exists) return;

          await flightRepository
            .insert({
              flightNumber: flight.flightNumber,
              from: flight.from,
              to: flight.to,
              departureDateTime: flight.departureDateTime,
              arrivalDateTime: flight.arrivalDateTime,
              price: flight.price,
              availableSlot: flight.availableSlot,
            })
            .catch((e) => console.error("Error saving new FlightSeeder", e));
        })
      );
    } catch (error) {
      return console.error(
        `❌ ~ file: flight.seed.ts ~ FlightSeeder ~ run ~ error: `,
        error
      );
    }
  }
}
