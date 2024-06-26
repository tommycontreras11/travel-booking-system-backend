import { Expose } from "class-transformer";
import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from "class-validator";

export class CreatePaymentDTO {
  @IsNotEmpty()
  @IsString()
  @Expose()
  paymentMethod: string;

  @IsUUID("4")
  @IsNotEmpty()
  @Expose()
  reservationUUID: string;
}
