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
		toSlug(): string
		toEnum(): string
		slugToString(): string
		btoa(): string
		atob(): string
		encryptPassword(salt?: number): string
		encrypt(): string | null
		decrypt(): string | null
		json<T = object>(): T | undefined
		/**
		 * @returns {string} Capitalized string
		 * @example 'example'.capitalize() => 'Example'
		 */
		capitalize(): string
		onlyNumber(): string
	}
}

export { }
