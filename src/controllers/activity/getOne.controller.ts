import { Request, Response } from "express";
import { getOneActivityService } from "./../../services/activity/getOne.service";
import { statusCode } from "../../utils/statusCode.util";

export const getOneActivityController = async (req: Request, res: Response) => {
  const uuid = req.params.uuid as string

  getOneActivityService({
    where: {
      uuid
    },
    cache: true
  })
    .then((activity) => {
      const data = {
        uuid: activity.uuid,
        name: activity.name,
        location: activity.location,
        price: activity.price,
        description: activity.description,
        availableSlot: activity.availableSlot
      }

      return res.json(data)
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
