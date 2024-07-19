import { createReservationController } from "./../../../controllers/reservation";
import { Router } from "express";
import { CreateReservationDTO } from "../../../dto/reservation.dto";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";
import { getAllReservationController } from "./../../../controllers/reservation/getAll.controller";

const router = Router()

router.get(
    '/',
    getAllReservationController
)

router.post(
    '/',
    validateDTO(CreateReservationDTO),
    createReservationController
)

export default router