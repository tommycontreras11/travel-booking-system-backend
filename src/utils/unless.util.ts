import { Request, Response, NextFunction } from 'express'

interface Path {
	path: string
	method: string
	all?: boolean
}

export const unless = (
	datas: Array<Path>,
	middleware: (req: Request, res: Response, next: NextFunction) => unknown
) => {
	return function (req: Request, res: Response, next: NextFunction) {
		const exclude = datas.find((data) => {
			if (data.path.indexOf('/:') >= 0) {
				const split1 = data.path.split('/')
				const split2 = req.path.split('/')
				const formatted1: Array<string> = []
				const formatted2: Array<string> = []

				if (split1.length == split2.length) {
					split1.filter((d, i) => {
						if (d.indexOf(':') === -1) {
							formatted1.push(d)
							formatted2.push(split2[i])
						}
					})

					if (formatted1.join('/') === formatted2.join('/')) {
						return data
					} else {
						return null
					}
				} else {
					return null
				}
			} else {
				return (
					(data.method === req.method && data.path === req.path) ||
					(data.all && req.path.indexOf(data.path) !== -1)
				)
			}
		})

		if (exclude) {
			return next()
		} else {
			return middleware(req, res, next)
		}
	}
}
