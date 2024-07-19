import { Request, Response } from "express";
import { createTestimonialService } from "./../../services/testimonial/create.service";
import { statusCode } from "../../utils/statusCode.util";

export const createTestimonialController = async (req: Request, res: Response) => {
  createTestimonialService(req.body)
    .then((data) => res.json({ message: data }))
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
