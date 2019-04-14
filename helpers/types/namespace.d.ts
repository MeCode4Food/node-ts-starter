// eslint-disable-next-line
import { RedisClient } from 'redis'

declare global {
  namespace Express {
    interface Request {
      body: JSON
      url: string
      method: string
      locals: {
        redisCache: RedisClient
        [s: string] : any
      }
    }
    interface Response {
      removeHeader: (header: string) => void
      status: (code: number) => Response
      send: (body: any) => void
    }
  }
}
export = Express
