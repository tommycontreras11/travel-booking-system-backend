import { createReservationController } from "./../../../controllers/reservation";
import { Router } from "express";
import { CreateReservationDTO } from "../../../dto/reservation.dto";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";

const router = Router()

router.post(
    '/',
    validateDTO(CreateReservationDTO),
    createReservationController
)

export default router