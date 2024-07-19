import { UserEntity } from "./../../database/entities/entity/user.entity";
import { statusCode } from "./../../utils/statusCode.util";
import { ReservationEntity } from "./../../database/entities/entity/reservation.entity";

export async function getAllReservationService(options: { userUUID?: string }) {
  const { userUUID } = options;

  let findUser: UserEntity | null = null;
  if (userUUID) {
    findUser = await UserEntity.findOne({
      where: { uuid: userUUID },
    }).catch((e) => {
      console.log("getAllReservationService.UserEntity.findOne: ", e);
      return null;
    });

    if (!findUser)
      return Promise.reject({
        status: statusCode.NOT_FOUND,
        message: "User not found",
      });
  }

  let findReservation: ReservationEntity[] | null = null;
  if (findUser) {
    findReservation = await ReservationEntity.find({
      where: { user: { id: findUser.id } },
      relations: { user: true, activity: true, hotel: true, flight: true },
    }).catch((e) => {
      console.log("getAllReservationService.ReservationEntity.findOne: ", e);
      return null;
    });

    if (!findReservation)
      return Promise.reject({
        status: statusCode.NOT_FOUND,
        message: "User's reservation not found",
      });
  }

  if (!findReservation) {
    findReservation = await ReservationEntity.find({ relations: { activity: true, hotel: true, flight: true } }).catch((e) => {
      console.log("getAllReservationService.ReservationEntity.find: ", e);
      return null;
    });

    if (!findReservation)
      return Promise.reject({
        status: statusCode.NOT_FOUND,
        message: "Reservation not found",
      });
  }

  return findReservation;
}
