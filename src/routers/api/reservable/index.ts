import { getAllReservableController } from "./../../../controllers/reservable";
import { Router } from "express";

const router = Router()

router.post(
    '/',
    getAllReservableController
)

export default router