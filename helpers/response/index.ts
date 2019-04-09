/// <reference path="../types/namespace.d.ts" />

const success = (res: Express.Response, data: object) => {
  return sendResponse(res, 200, 'success', data)
}

const failure = (res: Express.Response, code: number, error: Error) => {
  return sendResponse(res, code, error.message, undefined)
}
// ---- Supporting Methods ----

const sendResponse = (
  res: Express.Response,
  code: number,
  description: string,
  data: object | undefined
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
}

export { success, failure }
