import express from 'express'
import itemRouter from './item'
import pingRouter from './ping'

const router = express.Router({ mergeParams: true })

router.use('/item', itemRouter)
router.use('*', pingRouter)

export default router
