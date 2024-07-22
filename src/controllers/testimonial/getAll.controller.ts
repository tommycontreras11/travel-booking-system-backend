import { Request, Response } from "express";
import { statusCode } from "../../utils/statusCode.util";
import { getAllTestimonialService } from "./../../services/testimonial/getAll.service";

export const getAllTestimonialController = async (_req: Request, res: Response) => {
  getAllTestimonialService({
    relations: { user: true },
  })
    .then((testimonials) => {
      const data = testimonials.map((testimonial) => ({
        uuid: testimonial.uuid,
        comment: testimonial.comment,
        firstName: testimonial.user.firstName,
        lastName: testimonial.user.lastName,
        email: testimonial.user.email
      }))

      return res.json(data)
    })
    .catch((e) => {
      return res
        .status(e.status ?? statusCode.INTERNAL_SERVER_ERROR)
        .json({ message: e.message });
    });
};
