import express from 'express'
import * as controller from './controller'
import { redisMiddleware } from '../../services/redis'

const router = express.Router({ mergeParams: true })

router.get('/:id', redisMiddleware, controller.getSingleItem)
router.post('/post', redisMiddleware, controller.postVerGetSingleItem)

router.get('/', redisMiddleware, controller.getAllItems)

router.post('/', redisMiddleware, controller.insertSingleItem)

export default router
