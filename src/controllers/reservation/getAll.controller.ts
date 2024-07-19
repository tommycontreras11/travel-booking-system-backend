import { Request, Response } from "express";
import { getAllReservationService } from "./../../services/reservation/getAll.service";
import { statusCode } from "../../utils/statusCode.util";

export const getAllReservationController = async (req: Request, res: Response) => {
  const { userUUID } = req.query;

  getAllReservationService({
    userUUID: (userUUID as string) ? (userUUID as string) : undefined
  })
    .then((reservations) => {
      const data = reservations.map((reservation) => {
        const activity = reservation?.activity;
        const hotel = reservation?.hotel;
        const flight = reservation?.flight;
        
        return {
          uuid: reservation.uuid,
          reservationDate: reservation.reservationDate,
          status: reservation.status,
          ...(activity && {
            activity: {
              uuid: activity.uuid,
              name: activity.name,
              location: activity.location,
              price: activity.price,
              description: activity.description,
              availableSlot: activity.availableSlot
            }
          }),
          ...(hotel && {
            hotel: {
              uuid: hotel.uuid,
              name: hotel.name,
              address: hotel.address,
              city: hotel.city,
              stars: hotel.stars,
              availableSlot: hotel.availableSlot,
              pricePerNight: hotel.pricePerNight
            }
          }),
          ...(flight && {
            flight: {
              uuid: flight.uuid,
              flightNumber: flight.flightNumber,
              from: flight.from,
              to: flight.to,
              departureDateTime: flight.departureDateTime,
              arrivalDateTime: flight.arrivalDateTime,
              price: flight.price,
              availableSlot: flight.availableSlot
            }
          })
        };
      });

      return res.json(data);
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
