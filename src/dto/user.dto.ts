import { Expose } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @Expose()
    firstName: string

    @IsNotEmpty()
    @IsString()
    @Expose()
    lastName: string

    @IsNotEmpty()
    @IsString()
    @Expose()
    phone: string

    @IsNotEmpty()
    @IsEmail()
    @Expose()
    email: string

    @IsNotEmpty()
    @IsString()
    @Expose()
    password: string
}