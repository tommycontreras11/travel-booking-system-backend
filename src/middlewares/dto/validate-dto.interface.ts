export const ValidationDTOEnum = {
	QUERY: 'query',
	BODY: 'body',
	PARAMS: 'params'
} as const

export type ValidationDTOType =
	(typeof ValidationDTOEnum)[keyof typeof ValidationDTOEnum]
