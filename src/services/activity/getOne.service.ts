import { ActivityEntity } from "./../../database/entities/entity/activity.entity";
import { FindOneOptions } from "typeorm";
import { statusCode } from "../../utils/statusCode.util";

export async function getOneActivityService(
  options: FindOneOptions<ActivityEntity>
) {
  const activities = await ActivityEntity.findOne(options).catch((e) => {
    console.log("getOneActivityService.ActivityEntity.findOne: ", e);
  });

  if (!activities)
    return Promise.reject({
      status: statusCode.NOT_FOUND,
      message: "Activities not found",
    });

  return activities;
}
