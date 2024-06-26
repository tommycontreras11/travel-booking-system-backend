import { HotelEntity } from "../../database/entities/entity/hotel.entity";
import { FindOneOptions } from "typeorm";
import { statusCode } from "../../utils/statusCode.util";

export async function getOneHotelService(
  options: FindOneOptions<HotelEntity>
) {
  const hotels = await HotelEntity.findOne(options).catch((e) => {
    console.log("getOneHotelService.HotelEntity.findOne: ", e);
  });

  if (!hotels)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Hotels not found",
    });

  return hotels;
}
