import { getAllHotelController, getOneHotelController } from "../../../controllers/hotel";
import { Router } from "express";
import { UuidDTO } from "../../../dto/common.dto";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";

const router = Router()

router.get(
    '/',
    getAllHotelController
)

router.get(
    '/:uuid',
    validateDTO(UuidDTO, 'params'),
    getOneHotelController
)

export default router