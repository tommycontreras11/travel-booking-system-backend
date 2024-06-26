import { Request, Response } from "express";
import { statusCode } from "../../utils/statusCode.util";
import { getOneHotelService } from "./../../services/hotel/getOne.service";

export const getOneHotelController = async (req: Request, res: Response) => {
  const uuid = req.params.uuid as string

  getOneHotelService({
    where: {
      uuid
    },
    cache: true
  })
    .then((hotel) => {
      const data = {
        uuid: hotel.uuid,
        name: hotel.name,
        address: hotel.address,
        city: hotel.city,
        stars: hotel.stars,
        pricePerNight: hotel.pricePerNight,
        availableSlot: hotel.availableSlot
      }

      return res.json(data)
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
