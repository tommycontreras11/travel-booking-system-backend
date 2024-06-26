import { Request, Response } from "express";
import { getAllFlightService } from "../../services/flight/getAll.service";
import { statusCode } from "../../utils/statusCode.util";

export const getAllFlightController = async (req: Request, res: Response) => {
  const { arrivalDate, departureDate, quantity } = req.query;

  getAllFlightService({
    arrivalDate: arrivalDate ? new Date(arrivalDate as string) : undefined,
    departureDate: departureDate
      ? new Date(departureDate as string)
      : undefined,
    quantity: quantity ? parseInt(quantity as string) : undefined,
  })
    .then((flights) => {
      const data = flights.map((flight) => ({
        uuid: flight.uuid,
        from: flight.from,
        to: flight.to,
        departureDateTime: flight.departureDateTime,
        arrivalDateTime: flight.arrivalDateTime,
        price: flight.price,
        availableSlot: flight.availableSlot,
      }));

      return res.json(data);
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });

  // getAllFlightService({
  //   ...(arrivalDate && departureDate && quantity && {
  //     where: {
  //       arrivalDateTime: Between(new Date(arrivalDate as string), new Date(departureDate as string)),
  //       availableSlot: In(quantity as any)
  //     }
  //   }),
  //   cache: true
  // })
  //   .then((flights) => {
  //     const data = flights.map((flight) => ({
  //       uuid: flight.uuid,
  //       from: flight.from,
  //       to: flight.to,
  //       departureDateTime: flight.departureDateTime,
  //       arrivalDateTime: flight.arrivalDateTime,
  //       price: flight.price,
  //       availableSlot: flight.availableSlot
  //     }))

  //     return res.json(data)
  //   })
  //   .catch((e) => {
  //     return res
  //       .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
  //       .json({ message: e.message });
  //   });
};
