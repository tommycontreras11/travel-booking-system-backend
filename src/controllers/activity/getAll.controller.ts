import { Request, Response } from "express";
import { getAllActivityService } from "./../../services/activity/getAll.service";
import { statusCode } from "../../utils/statusCode.util";

export const getAllActivityController = async (req: Request, res: Response) => {
  const { name, price, quantity } = req.query;

  getAllActivityService({
    name: (name as string) ? (name as string) : undefined,
    price: price ? parseInt(price as string) : undefined,
    quantity: quantity ? parseInt(quantity as string) : undefined,
  })
    .then((activities) => {
      const data = activities.map((activity) => ({
        uuid: activity.uuid,
        name: activity.name,
        location: activity.location,
        price: activity.price,
        description: activity.description,
        availableSlot: activity.availableSlot
      }));

      return res.json(data);
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
