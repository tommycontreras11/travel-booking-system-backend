import { FlightEntity } from "./../../database/entities/entity/flight.entity";
import { statusCode } from "./../../utils/statusCode.util";

export const getAllFlightService = async (options: {
  arrivalDate?: Date;
  departureDate?: Date;
  quantity?: number;
}) => {
  const { arrivalDate, departureDate, quantity } = options;

  let queryBuilder = FlightEntity.createQueryBuilder("flight");

  if (arrivalDate && departureDate && quantity) {
    queryBuilder = queryBuilder
      .where(
        "flight.arrivalDateTime BETWEEN :startArrivalDate AND :endArrivalDate",
        {
          startArrivalDate: arrivalDate,
          endArrivalDate: new Date(
            departureDate.getTime() + 24 * 60 * 60 * 1000
          ),
        }
      )
      .andWhere(
        "flight.departureDateTime BETWEEN :startDepartureDate AND :endDepartureDate",
        {
          startDepartureDate: arrivalDate,
          endDepartureDate: new Date(
            departureDate.getTime() + 24 * 60 * 60 * 1000
          ),
        }
      )
      .andWhere("flight.available_slots >= :quantity", {
        quantity,
      });
  }

  const flights = await queryBuilder.getMany();

  if (!flights)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Flights not found",
    });

  return flights;
};
