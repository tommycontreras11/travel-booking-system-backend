import { Expose } from "class-transformer";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateTestimonialDTO {
    @IsNotEmpty()
	@IsString()
	@Expose()
    comment: string

    @IsUUID("4")
    @IsNotEmpty()
    @Expose()
    userUUID: string;
}