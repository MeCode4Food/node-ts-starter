/// <reference path="../types/namespace.d.ts" />

const success = (req: Express.Request, res: Express.Response, data: object | string) => {
  const payload = JSON.stringify(generateAndSendResponse(res, 200, 'success', data))

  // TODO tidy up
  let cacheKey = req.url
  cacheKey += req.method !== 'GET' ? JSON.stringify(req.body) : ''

  req.locals.redisCache.setex(cacheKey, process.env.TIMEOUT as unknown as number, payload)
}

const failure = (req: Express.Request, res: Express.Response, code: number, error: Error) => {
  return generateAndSendResponse(res, code, error.message, undefined)
}
// ---- Supporting Methods ----

const generateAndSendResponse = (
  res: Express.Response,
  code: number,
  description: string,
  data: object | string | undefined
) => {
  res.removeHeader('X-Powered-By')
  let payload = {
    status: {
      code: code,
      description: description
    },
    data: data
  }
  res.status(200).send(payload)

  return data
}

export { success, failure }
