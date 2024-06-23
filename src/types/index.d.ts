import Encryption from './../utils/encryption'
import bcryptjs from 'bcryptjs'

declare global {

	// eslint-disable-next-line no-var
	var rootDir: string
	interface ObjectI {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any
	}

	interface ErrorI {
		message: string
		code?: number
	}

	interface String {
		encryptPassword(salt?: number): string
		encrypt(): string | null
		decrypt(): string | null
		json<T = object>(): T | undefined
		onlyNumber(): string
	}
}

String.prototype.encryptPassword = function (salt = 10): string {
	return bcryptjs.hashSync(this.toString(), salt)
}

String.prototype.encrypt = function (): string | null {
	return Encryption.instance.encrypt(this.toString())
}

String.prototype.decrypt = function (): string | null {
	return Encryption.instance.decrypt(this.toString())
}

String.prototype.json = function <T>(): T | undefined {
	try {
		return JSON.parse(this as string)
	} catch (error) {
		// console.error('String.prototype.json() error: ', error)
		return undefined
	}
}


export { }
