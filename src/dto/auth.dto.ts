import { Expose } from 'class-transformer'
import {
	IsNotEmpty,
	IsString
} from 'class-validator'

export class SignInDTO {
	@IsNotEmpty()
	@IsString()
	@Expose()
	email: string

	@IsNotEmpty()
	@IsString()
	@Expose()
	password: string
}