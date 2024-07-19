import { TestimonialEntity } from "./../../database/entities/entity/testimonial.entity";
import { UserEntity } from "./../../database/entities/entity/user.entity";
import { CreateTestimonialDTO } from "./../../dto/testimonial";
import { statusCode } from "./../../utils/statusCode.util";

export async function createTestimonialService({
  comment,
  userUUID,
}: CreateTestimonialDTO) {
  const findUser = await UserEntity.findOne({
    where: { uuid: userUUID },
  }).catch((e) => {
    console.log("createTestimonial.UserEntity.findOne: ", e);
    return null;
  });

  if (!findUser)
    return Promise.reject({
      message: "User not found",
      status: statusCode.BAD_REQUEST,
    });

  await TestimonialEntity.create({
    comment,
    userId: findUser.id,
  }).save().catch((e) => {
    console.log("createTestimonial.TestimonialEntity.create: ", e);
    return null;
  });

  return "Testimonial created successfully";
}
