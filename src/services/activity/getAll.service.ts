import { statusCode } from "../../utils/statusCode.util";
import { ActivityEntity } from "./../../database/entities/entity/activity.entity";

export const getAllActivityService = async (options: {
  name?: string;
  price?: number;
  quantity?: number;
}) => {
  const { name, price, quantity } = options;

  let queryBuilder = ActivityEntity.createQueryBuilder("activity");

  if (name) {
    queryBuilder = queryBuilder
      .where(
        "activity.name = :name",
        {
          name: name
        }
      )
  }

  if (quantity) {
    queryBuilder = queryBuilder
      .andWhere("activity.availableSlot >= :quantity", {
        quantity,
      });
  }

  if (price) {
    queryBuilder = queryBuilder
      .andWhere("activity.price >= :price", {
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
