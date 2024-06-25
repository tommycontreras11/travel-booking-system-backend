import { Expose } from "class-transformer"
import { IsString, IsNotEmpty, IsUUID } from "class-validator"

export class UuidDTO {
    @IsUUID('4')
    @IsString()
    @Expose()
    @IsNotEmpty()
    uuid: string;
}