import { getAllActivityController, getOneActivityController } from "./../../../controllers/activity";
import { Router } from "express";
import { UuidDTO } from "../../../dto/common.dto";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";

const router = Router()

router.get(
    '/',
    getAllActivityController
)

router.get(
    '/:uuid',
    validateDTO(UuidDTO, 'params'),
    getOneActivityController
)

export default router