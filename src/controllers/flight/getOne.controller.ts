import { Request, Response } from "express";
import { statusCode } from "../../utils/statusCode.util";
import { getOneFlightService } from "../../services/flight/getOne.service";

export const getOneFlightController = async (req: Request, res: Response) => {
  const uuid = req.params.uuid as string

  getOneFlightService({
    where: {
      uuid
    },
    cache: true
  })
    .then((flight) => {
      const data = {
        uuid: flight.uuid,
        from: flight.from,
        to: flight.to,
        price: flight.price,
        availableSlot: flight.availableSlot
      }

      return res.json(data)
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
