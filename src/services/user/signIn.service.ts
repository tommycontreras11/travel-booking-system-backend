import bcrypt from "bcrypt";
import { UserEntity } from "../../database/entities/entity/user.entity";
import { SignInDTO } from "../../dto/auth.dto";
import { statusCode } from "./../../utils/statusCode.util";

export async function signInService({ email, password }: SignInDTO): Promise<UserEntity> {
  const user = await UserEntity.findOne({ where: { email } }).catch((e) => {
    console.error("signInService -> UserEntity.findOne: ", e);
    return null;
  });

  if (!user)
    return Promise.reject({
      message: "User not found",
      status: statusCode.NOT_FOUND,
    });

//   const comparePasswords = await bcrypt.compare(
//     password,
//     user.password
//   );

//   if (!comparePasswords)
//     return Promise.reject({
//       message: "Wrong password",
//       status: statusCode.UNAUTHORIZED,
//     });

  if (user.password != password)
    return Promise.reject({
      message: "Wrong password",
      status: statusCode.UNAUTHORIZED,
    });

  return Promise.resolve(user);
}
