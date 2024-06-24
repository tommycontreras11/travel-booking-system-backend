import { UserEntity } from "./../../database/entities/entity/user.entity";
import { CreateUserDTO } from "./../../dto/user.dto";
import { statusCode } from "./../../utils/statusCode.util";

export async function createUserService({ email, ...payload }: CreateUserDTO) {
  const findUserByEmail = await UserEntity.findOne({
    where: { email },
  }).catch((e) => {
    console.log("createUserService.UserEntity.findOne: ", e);
    return null;
  });

  if (findUserByEmail)
    return Promise.reject({
      status: statusCode.BAD_REQUEST,
      message: "A user with that email already exists.",
    });

  UserEntity.create({
    ...payload,
    email,
  })
    .save()
    .catch((e) => {
      console.log("createUserService.UserEntity.create: ", e);
      return null;
    });

  return "User created successfully";
}
