import { Router } from 'express'
import { authMiddleware } from './../../middlewares/auth/auth.middleware'
import { unless } from './../../utils/unless.util'

import authRouter from './auth'
import userRouter from './user'
import flightRouter from './flight'

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

export default router