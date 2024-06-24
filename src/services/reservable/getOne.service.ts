import { FindOneOptions } from "typeorm";
import { ReservableEntity } from "../../database/entities/entity/reservable.entity";
import { statusCode } from "../../utils/statusCode.util";

export async function getOneReservableService(
  options: FindOneOptions<ReservableEntity>
) {
  const reservables = await ReservableEntity.findOne(options).catch((e) => {
    console.log("getAllReservableService.ReservableEntity.find: ", e);
  });

  if (!reservables)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Reservables not found",
    });

  return reservables;
}
