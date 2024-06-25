import { Request, Response } from "express";
import { Between, In } from "typeorm";
import { getAllFlightService } from "../../services/flight/getAll.service";
import { statusCode } from "../../utils/statusCode.util";

export const getAllFlightController = async (req: Request, res: Response) => {
  const { arrivalDate, departureDate, quantity } = req.query;


  const minAvailableSlots = quantity ? parseInt(quantity as string) : undefined;

  getAllFlightService({
    arrivalDate: arrivalDate ? new Date(arrivalDate as string) : undefined,
    departureDateTime: departureDate ? new Date(departureDate as string) : undefined,
    minAvailableSlots,
    cache: true
  }).then((flights) => {
    const data = flights.map((flight) => ({
      uuid: flight.uuid,
      from: flight.from,
      to: flight.to,
      departureDateTime: flight.departureDateTime,
      arrivalDateTime: flight.arrivalDateTime,
      price: flight.price,
      available_slots: flight.available_slots
    }))

    return res.json(data)
  })
  .catch((e) => {
    return res
      .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
      .json({ message: e.message });
  });;

  // getAllFlightService({
  //   ...(arrivalDate && departureDate && quantity && {
  //     where: {        
  //       arrivalDateTime: Between(new Date(arrivalDate as string), new Date(departureDate as string)),
  //       available_slots: In(quantity as any)
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
  //       available_slots: flight.available_slots
  //     }))

  //     return res.json(data)
  //   })
  //   .catch((e) => {
  //     return res
  //       .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
  //       .json({ message: e.message });
  //   });
};
