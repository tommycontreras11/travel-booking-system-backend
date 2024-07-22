import { Router } from "express";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";
import { createTestimonialController, getAllTestimonialController } from "./../../../controllers/testimonial";
import { CreateTestimonialDTO } from "./../../../dto/testimonial";

const router = Router()

router.get(
    '/',
    getAllTestimonialController
)

router.post(
    '/',
    validateDTO(CreateTestimonialDTO),
    createTestimonialController
)

export default router