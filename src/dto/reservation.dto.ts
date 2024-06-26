import { Expose, Transform } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class CreateReservationDTO {
  @IsDate()
  @IsNotEmpty()
  @Expose()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  reservationDate: Date;

  @IsUUID("4")
  @IsOptional()
  @Expose()
  activityUUID: string;

  @IsUUID("4")
  @IsOptional()
  @Expose()
  hotelUUID: string;

  @IsUUID("4")
  @IsOptional()
  @Expose()
  flightUUID: string;

  @IsUUID("4")
  @IsNotEmpty()
  @Expose()
  userUUID: string;
}
