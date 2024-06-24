import { Request, Response } from "express";
import { statusCode } from "../../utils/statusCode.util";
import { getAllReservableService } from "./../../services/reservable/getAll.service";

export const getOneReservableController = async (_req: Request, res: Response) => {

  getAllReservableService({
    cache: true
  })
    .then((reservables) => {
      const data = reservables.map((reservable) => ({
        uuid: reservable.uuid,
        name: reservable.name,
        type: reservable.type,
        location: reservable.location,
        departure: reservable.departure,
        departure_time: reservable.departure_time,
        arrival_time: reservable.arrival_time,
        available_slots: reservable.available_slots,
        price: reservable.price,
      }))

      return res.json(data)
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
