import { createTestimonialController } from "./../../../controllers/testimonial";
import { CreateTestimonialDTO } from "./../../../dto/testimonial";
import { Router } from "express";
import { validateDTO } from "../../../middlewares/dto/validate-dto.middleware";

const router = Router()

router.post(
    '/',
    validateDTO(CreateTestimonialDTO),
    createTestimonialController
)

export default router