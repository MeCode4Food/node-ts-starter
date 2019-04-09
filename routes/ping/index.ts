import express from 'express'

const router = express.Router({ mergeParams: true })

router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Hello World!')
})

export default router
