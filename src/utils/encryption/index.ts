import crypto from 'crypto'
// import { securityConfig } from '@config'

class Encryption {
	private readonly config = {
		algorithm: 'des-ede3',
		key: '6iFG0Wl3L4oN2Sk3Cs7nUkc7'
	}
	private algorithm: string
	private key: Buffer | string
	private iv: Buffer

	private static _instance: Encryption

	constructor() {
		this.algorithm = this?.config?.algorithm || 'des-ede3'
		// this.algorithm = 'des-ede3'
		this.key = Buffer.from(
			Buffer.from(this?.config?.key || '6iFG0Wl3L4oN2Sk3Cs7nUkc7').toString('hex'),
			'hex'
		)
		this.iv = Buffer.alloc(0)

		if (!this.algorithm && !this.key) {
			throw Error('Encryption Configuration Error!')
		}
	}

	public static get instance(): Encryption {
		!Encryption._instance && (Encryption._instance = new Encryption())
		return Encryption._instance
	}

	public encrypt(value: string, isInt = false): string | null {
		try {
			const cipher = crypto.createCipheriv(
				this.algorithm,
				this.key,
				this.iv
			)
			let buffer = Buffer.from(value, 'utf8').toString('binary')

			if (isInt) {
				cipher.setAutoPadding(false)
				const buf = Buffer.allocUnsafe(8)
				buf.writeBigUInt64BE(BigInt(value))
				buffer = buf.toString('binary')
			}

			const firstPart = cipher.update(buffer, 'binary', 'hex')
			const finalPart = cipher.final('hex')
			return `${firstPart}${finalPart}`
		} catch (error) {
			console.error('encrypt() error: ', error)
			return null
		}
	}

	public decrypt(token: string, isInt = false): string | null {
		try {
			const decipher = crypto.createDecipheriv(
				this.algorithm,
				this.key,
				this.iv
			)
			isInt && decipher.setAutoPadding(false)

			const buffer = Buffer.from(token, 'hex').toString('hex')
			const firstPart = decipher.update(buffer, 'hex', 'hex')
			const finalPart = decipher.final('hex') || ''
			const decrypted = `${firstPart}${finalPart}`
			const buf = Buffer.from(decrypted, 'hex')

			return isInt
				? buf.readBigUInt64BE(0).toString()
				: buf.toString('utf8')
		} catch (error) {
			return null
		}
	}

	public generateRandomKey(
		encoding: BufferEncoding = 'base64'
	): string | null {
		try {
			return crypto.randomBytes(18).toString(encoding)
		} catch (error) {
			return null
		}
	}
}

export default Encryption
