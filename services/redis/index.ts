// exposes the redis cache service as a middleware
import * as redis from 'redis'
import * as signale from 'signale'
import * as response from '../../helpers/response'

// attempt to import types from express failed. using normal imports with eslint error
// eslint-disable-next-line
import { NextFunction } from 'express';

// this works
/// <reference path="../../helpers/types/namespace.d.ts" />
// this doesn't work
// / <reference types="express-server-static-core" />

export const redisCache = redis.createClient()

export const redisMiddleware = async (req: Express.Request, res: Express.Response, next: NextFunction) => {
  // mark the request to use the cache
  req.locals.useCache = true

  // key of cache is the URL + stringified body
  let cacheKey = req.url

  // obtain value using the cache key. If it exists, return the value.
  // otherwise pass it to the next function
  req.locals.redisCache.get(cacheKey, (error, value) => {
    if (error) signale.error(error)
    value = JSON.parse(value)
    if (value) {
      response.success(req, res, value)
    } else {
      next()
    }
  })
}
