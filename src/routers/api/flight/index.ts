import { getOneFlightController } from "../../../controllers/flight/getOne.controller";
import { getAllFlightController } from "../../../controllers/flight";
import { Router } from "express";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";
import { UuidDTO } from "../../../dto/common.dto";

const router = Router()

router.get(
    '/',
    getAllFlightController
)

router.get(
    '/:uuid',
    validateDTO(UuidDTO, 'params'),
    getOneFlightController
)

export default router