import { FindManyOptions } from "typeorm";
import { TestimonialEntity } from "../../database/entities/entity/testimonial.entity";
import { statusCode } from "../../utils/statusCode.util";

export async function getAllTestimonialService(
  options: FindManyOptions<TestimonialEntity>
) {
  const testimonials = await TestimonialEntity.find(options).catch((e) => {
    console.log("TestimonialEntity.find: ", e);
    return null;
  });

  if (!testimonials)
    return Promise.reject({
      message: "Testimonials not found",
      status: statusCode.BAD_REQUEST,
    });

  return testimonials;
}
