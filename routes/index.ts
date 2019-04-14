import express from 'express'
import itemRouter from './item'
import pingRouter from './ping'
import miscRouter from './misc'

const router = express.Router({ mergeParams: true })

router.use('/item', itemRouter)
router.use('/misc', miscRouter)
router.use('*', pingRouter)

export default router
