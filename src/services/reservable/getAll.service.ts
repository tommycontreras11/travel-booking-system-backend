import { statusCode } from "./../../utils/statusCode.util";
import { ReservableEntity } from "./../../database/entities/entity/reservable.entity";
import { FindManyOptions } from "typeorm";

export async function getAllReservableService(
  options?: FindManyOptions<ReservableEntity>
) {
  const reservables = await ReservableEntity.find(options).catch((e) => {
    console.log("getAllReservableService.ReservableEntity.find: ", e);
  });

  if (!reservables)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Reservables not found",
    });

  return reservables;
}
