import express from 'express'
import * as controller from './controller'

const router = express.Router({ mergeParams: true })

router.get('/:id', controller.getSingleItem)

router.get('/', controller.getAllItems)

router.post('/', controller.insertSingleItem)

export default router
