export const convertObjectValues = (obj: Record<string, string | number | boolean | Array<string>>): Record<string, string | number | boolean | Array<string>> => {
    const convertedObj: Record<string, string | number | boolean | Array<string>> = { ...obj };

    for (const key in obj) {
        if (typeof obj[key] === 'string') {

            const lowerCaseValue = (obj[key] as string).toLowerCase();

            const parsedArray = (obj[key] as string).json<Array<string>>();

            if (parsedArray && Array.isArray(parsedArray)) {

                convertedObj[key] = parsedArray;

            } else if (lowerCaseValue === 'true' || lowerCaseValue === 'false') {

                convertedObj[key] = lowerCaseValue === 'true';

            } else if (/^[0-9]{11}$/.test(lowerCaseValue)) {

                convertedObj[key] = obj[key];

            } else if (/^[0-9]+(\.[0-9]+)?$/.test(lowerCaseValue)) {

                convertedObj[key] = parseFloat(lowerCaseValue);

            } else {

                convertedObj[key] = obj[key];
            }
        }
    }

    return convertedObj;
}