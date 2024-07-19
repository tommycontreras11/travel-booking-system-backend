import { Router } from 'express'
import { authMiddleware } from './../../middlewares/auth/auth.middleware'
import { unless } from './../../utils/unless.util'

import authRouter from './auth'
import userRouter from './user'
import flightRouter from './flight'
import reservationRouter from './reservation'
import paymentRouter from './payment'
import activityRouter from './activity'
import hotelRouter from './hotel'
import testimonialRouter from './testimonial'

const router = Router()

router.get('/ping', (_req, res) => {
    res.json({ healthy: true })
})

router.use(
    '/auth',
    unless(
        [
            { path: '/signIn', method: 'POST' },
        ],
        authMiddleware
    ),
    authRouter
)

router.use('/users', userRouter);
router.use('/flights', flightRouter);
router.use('/reservations', reservationRouter);
router.use('/payments', paymentRouter);
router.use('/activities', activityRouter);
router.use('/hotels', hotelRouter);
router.use('/testimonials', testimonialRouter);

export default router