import { getRepository, Between } from "typeorm";
import { FlightEntity } from "./../../database/entities/entity/flight.entity"; // Ajusta la ruta según la estructura de tu proyecto
import { statusCode } from "./../../utils/statusCode.util";

export const getAllFlightService = async (options: {
  arrivalDate?: Date,
  departureDateTime?: Date,
  minAvailableSlots?: number,
  cache: boolean
}) => {
  const { arrivalDate, departureDateTime, minAvailableSlots, cache } = options;

  let queryBuilder = FlightEntity.createQueryBuilder("flight");

  // if (arrivalDate) {
  //   queryBuilder = queryBuilder.andWhere("flight.arrivalDateTime >= :arrivalDate", {
  //     arrivalDate
  //   });
  // }

  if (departureDateTime) {
    queryBuilder = queryBuilder.andWhere("flight.departureDateTime <= :departureDateTime", {
      departureDateTime
    });
  }

  // if (minAvailableSlots !== undefined) {
  //   queryBuilder = queryBuilder.andWhere("flight.available_slots >= :minAvailableSlots", {
  //     minAvailableSlots
  //   });
  // }

  const flights = await queryBuilder.getMany();

  if (!flights)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Flights not found",
    });

  return flights;
};
