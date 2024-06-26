import { statusCode } from "../../utils/statusCode.util";
import { HotelEntity } from "../../database/entities/entity/hotel.entity";

export const getAllHotelService = async (options: {
  name?: string;
  price?: number;
  quantity?: number;
}) => {
  const { name, price, quantity } = options;

  let queryBuilder = HotelEntity.createQueryBuilder("hotel");

  if (name) {
    queryBuilder = queryBuilder
      .where(
        "hotel.name = :name",
        {
          name: name
        }
      )
  }

  if (quantity) {
    queryBuilder = queryBuilder
      .andWhere("hotel.availableSlot >= :quantity", {
        quantity,
      });
  }

  if (price) {
    queryBuilder = queryBuilder
      .andWhere("hotel.pricePerNight >= :price", {
        price,
      });
  }

  const activities = await queryBuilder.getMany();

  if (!activities)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Activities not found",
    });

  return activities;
};
