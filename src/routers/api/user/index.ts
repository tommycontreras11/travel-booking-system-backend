import { createUserController } from "../../../controllers/user";
import { CreateUserDTO } from "../../../dto/user.dto";
import { Router } from "express";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";

const router = Router()

router.post(
    '/',
    validateDTO(CreateUserDTO),
    createUserController
)

export default router