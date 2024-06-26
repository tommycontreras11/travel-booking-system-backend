import { ActivityEntity } from "./../../database/entities/entity/activity.entity";
import { FlightEntity } from "./../../database/entities/entity/flight.entity";
import { HotelEntity } from "./../../database/entities/entity/hotel.entity";
import { ReservationEntity } from "./../../database/entities/entity/reservation.entity";
import { UserEntity } from "./../../database/entities/entity/user.entity";
import { CreateReservationDTO } from "./../../dto/reservation.dto";
import { statusCode } from "./../../utils/statusCode.util";

export async function createReservationService({
  activityUUID,
  hotelUUID,
  flightUUID,
  userUUID,
  reservationDate,
}: CreateReservationDTO) {
  const findUser = await UserEntity.findOne({
    where: { uuid: userUUID },
  }).catch((e) => {
    console.log("createReservationService.UserEntity.findOne: ", e);
    return null;
  });

  if (!findUser)
    return Promise.reject({
      status: statusCode.BAD_REQUEST,
      message: "User not found",
    });

    let findActivity: ActivityEntity | null = null;
    if(activityUUID) {
        findActivity = await ActivityEntity.findOne({
            where: { uuid: activityUUID },
          }).catch((e) => {
            console.log("createReservationService.ActivityEntity.findOne: ", e);
            return null;
          });
        
          if (!findActivity)
            return Promise.reject({
              status: statusCode.BAD_REQUEST,
              message: "Activity not found",
            });
    }
    

    let findHotel: HotelEntity | null = null;
    if(hotelUUID) {
        findHotel = await HotelEntity.findOne({
            where: { uuid: hotelUUID },
          }).catch((e) => {
            console.log("createReservationService.HotelEntity.findOne: ", e);
            return null;
          });
        
          if (!findHotel)
            return Promise.reject({
              status: statusCode.BAD_REQUEST,
              message: "Hotel not found",
            });
    }

    let findFlight: FlightEntity | null = null;
    if(flightUUID) {
        findFlight = await FlightEntity.findOne({
            where: { uuid: flightUUID },
          }).catch((e) => {
            console.log("createReservationService.FlightEntity.findOne: ", e);
            return null;
          });
        
          if (!findFlight)
            return Promise.reject({
              status: statusCode.BAD_REQUEST,
              message: "Flight not found",
            });
    }

    await ReservationEntity.create({
        userId: findUser.id,
        status: "CONFIRMED",
        reservationDate,
        ...(findActivity && { activityId: findActivity.id }),
        ...(findHotel && { hotelId: findHotel.id }),
        ...(findFlight && { flightId: findFlight.id })
    }).save().catch((e) => {
        console.log("createReservationService.ReservationEntity.create: ", e);
        return null;
    })

    await updateAvailableSlot(findHotel, "HotelEntity");
    await updateAvailableSlot(findActivity, "ActivityEntity");
    await updateAvailableSlot(findFlight, "FlightEntity");

  return "Reservation created successfully";
}

async function updateAvailableSlot<T extends { availableSlot: number, save: () => Promise<any> }>(entity: T | null | undefined, entityName: string): Promise<boolean> {
    if (entity) {
        entity.availableSlot = entity.availableSlot - 1;
        try {
            await entity.save();
            return true;
        } catch (e) {
            console.log(`createReservationService.${entityName}.save: `, e);
            return false;
        }
    }
    return false;
}