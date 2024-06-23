import { convertObjectValues } from './../../utils/object.util'
import { ClassConstructor, plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { ValidationDTOEnum, ValidationDTOType } from './validate-dto.interface'

export const validateDTO = (
	dtoClass: ClassConstructor<ObjectI>,
	type: ValidationDTOType = 'body',
	clearEmptyString = true,
	convertObjectValue = false
) => {
	return function (req: Request, res: Response, next: NextFunction) {
		const types: string[] = Object.values(ValidationDTOEnum)
		if (!types.includes(type))
			return res.status(500).json({
				error: { message: 'Invalid type into validation DTO' }
			})

		if (convertObjectValue) {
			req[type] = convertObjectValues(req[type])
		}

		const data: ObjectI = plainToInstance(dtoClass, req[type], {
			strategy: "exposeAll"
		})

		validate(data, { whitelist: true })
			.then((errors) => {
				const error = (errors || []).pop()
				const errorMessage = Object.values(error?.constraints || {})[0]
				if (errorMessage)
					return res
						.status(400)
						.json({ error: { message: errorMessage } })

				for (const key in data) {
					if (
						(clearEmptyString && data[key] === '') ||
						data[key] === null ||
						data[key] === undefined
					)
						delete data[key]
				}

				req[type] = data

				return next()
			})
			.catch((error) => {
				return res
					.status(500)
					.json({ error: { message: error.message } })
			})
	}
}

export const validateInternalDTO = async (
	dtoClass: ClassConstructor<ObjectI>,
	object: ObjectI,
): Promise<{ isValidDTO: boolean; message?: string }> => {

	const data: ObjectI = plainToInstance(dtoClass, object, {
		strategy: "exposeAll"
	})

	if (Array.isArray(data)) {

		const validationResult = [];

		for (const key in data) {
			validationResult.push(await validate(data[key], { whitelist: true })
				.then((errors) => {
					const error = (errors || []).pop()
					const errorMessage = Object.values(error?.constraints || {})[0]

					if (errorMessage) {
						return Promise.reject({status: 400, message: errorMessage })
					}

					return {
						isValidDTO: true,
						message: ""
					}
				})
				.catch((error) => {
					return Promise.reject(error)
				})
			)
		}

		return validationResult.find(x => x.isValidDTO === false) ?? { isValidDTO: true, message: "" };
	}


	const validation = await validate(data, { whitelist: true })
		.then((errors) => {
			const error = (errors || []).pop()
			const errorMessage = Object.values(error?.constraints || {})[0]

			if (errorMessage) {
				return Promise.reject({status: 400, message: errorMessage })
			}

			return {
				isValidDTO: true,
				message: "OK"
			}
		})
		.catch((error) => {
			return Promise.reject(error)
		})


	return validation;
}