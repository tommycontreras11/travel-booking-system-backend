import { createPaymentController } from "./../../../controllers/payment";
import { CreatePaymentDTO } from "./../../../dto/payment";
import { Router } from "express";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";

const router = Router()

router.post(
    '/',
    validateDTO(CreatePaymentDTO),
    createPaymentController
)

export default router