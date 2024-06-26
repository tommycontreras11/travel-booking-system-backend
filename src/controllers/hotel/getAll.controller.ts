import { Request, Response } from "express";
import { getAllHotelService } from "../../services/hotel/getAll.service";
import { statusCode } from "../../utils/statusCode.util";

export const getAllHotelController = async (req: Request, res: Response) => {
  const { name, price, quantity } = req.query;

  getAllHotelService({
    name: (name as string) ? (name as string) : undefined,
    price: price ? parseInt(price as string) : undefined,
    quantity: quantity ? parseInt(quantity as string) : undefined,
  })
    .then((hotels) => {
      const data = hotels.map((hotel) => ({
        uuid: hotel.uuid,
        name: hotel.name,
        address: hotel.address,
        city: hotel.city,
        stars: hotel.stars,
        pricePerNight: hotel.pricePerNight,
        availableSlot: hotel.availableSlot
      }));

      return res.json(data);
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
