import { signInController, signOutController } from "./../../../controllers/auth";
import { SignInDTO } from "./../../../dto/auth.dto";
import { Router } from "express";
import { validateDTO } from "./../../../middlewares/dto/validate-dto.middleware";

const router = Router()

router.post(
    '/signIn',
    validateDTO(SignInDTO),
    signInController
)
router.post('/signout', signOutController)

export default router