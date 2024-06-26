import { PaymentEntity } from "./../../database/entities/entity/payment.entity";
import { CreatePaymentDTO } from "./../../dto/payment";
import { ReservationEntity } from "../../database/entities/entity/reservation.entity";
import { statusCode } from "../../utils/statusCode.util";

export async function createPaymentService({
  paymentMethod,
  reservationUUID
}: CreatePaymentDTO) {
  const findReservation = await ReservationEntity.findOne({
    where: { uuid: reservationUUID },
    relations: {
      activity: true,
      hotel: true,
      flight: true,
    },
  }).catch((e) => {
    console.log("createPaymentService.ReservationEntity.findOne: ", e);
    return null;
  });

  if (!findReservation)
    return Promise.reject({
      status: statusCode.BAD_REQUEST,
      message: "Reservation not found",
    });

    await PaymentEntity.create({
      paymentMethod,
      reservationId: findReservation.id,
      amount: findReservation?.activity?.price ?? findReservation?.hotel?.pricePerNight ?? findReservation?.flight?.price ?? 0
    }).save().catch((e) => {
      console.log("createPaymentService.PaymentEntity.create: ", e);
      return null;
    });

  return "Payment created successfully";
}