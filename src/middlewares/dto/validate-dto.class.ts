import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { validateInternalDTO } from "./validate-dto.middleware";

export class IsValidDTOGlobal implements ValidatorConstraintInterface {

    async validate(object: ObjectI, validationArguments: ValidationArguments) {

        try {
            const dtoClass = validationArguments?.constraints ? validationArguments?.constraints[0] : undefined;

            const validationResult = await validateInternalDTO(dtoClass, object);
            return validationResult.isValidDTO
        } catch (error) {

            throw error
        }
    }

}