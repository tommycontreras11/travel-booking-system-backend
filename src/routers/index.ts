import { Router } from 'express'
import apiRouter from './api'
import rootRouter from './root'

const router = Router()

router.use('/api', apiRouter)
router.use('/', rootRouter)

export default router
