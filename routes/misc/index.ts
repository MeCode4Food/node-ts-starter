import express from 'express'
import { promisify } from 'util'
import * as response from '../../helpers/response'
import { redisMiddleware } from '../../services/redis'
import signale = require('signale')

const sleep = promisify(setTimeout)

const router = express.Router({ mergeParams: true })

router.post('/cache', redisMiddleware, async (req: express.Request, res: express.Response) => {
  try {
    console.log('here')
    await sleep(2000)
    response.success(req, res, req.body)
  } catch (error) {
    signale.error(error)
    response.failure(req, res, 500, error)
  }
})

export default router
