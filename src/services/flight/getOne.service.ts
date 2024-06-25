import { FindOneOptions } from "typeorm";
import { FlightEntity } from "../../database/entities/entity/flight.entity";
import { statusCode } from "../../utils/statusCode.util";

export async function getOneFlightService(
  options: FindOneOptions<FlightEntity>
) {
  const flights = await FlightEntity.findOne(options).catch((e) => {
    console.log("getAllFlightService.FlightEntity.find: ", e);
  });

  if (!flights)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Flights not found",
    });

  return flights;
}
