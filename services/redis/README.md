# Using the Redis Cache Middleware

## Introduction

This section is dedicated to the usage of the Express Routing middleware that's responsible for caching. The middleware uses the redis cache which runs on Linux.

### For Windows Users
Since redis is only for Linux based Operating Systems, the _Windows Subsystem for Linux_ can help you set the redis service up.

## Why Not Create Your Own Cache Service?
You could, and handling cache using keys and the responses are easy enough, but adding an expiriy (TTL) to each of the keys adds a layer of potential complexity that many Open Source services have out of the box.

Although, when handling licensing, Redis is known to [constantly changing their Open Source license](https://techcrunch.com/2019/02/21/redis-labs-changes-its-open-source-license-again/). So take that with a pinch of salt

# Usage 

## Configuring Route to use middleware
An Express route can be configured to use the middleware service for **value retrieval ONLY** as shown below

```typescript
router.post('/some_path', redisMiddleware, async (req: express.Request, res: express.Response) => {
  // route logic here
})
```

## Writing to Cache
Examples of how you would use the redis cache would be under the response object in `response/index.ts`. Which is also why for returning a response object back to the user using the response object, the Request object `req` is required (the redis cache singleton is bounded to `req.locals`, and the url is from `req.url`)

Example:

```javascript 
req.locals.redisCache.setex(cacheKey, process.env.TIMEOUT as unknown as number, payload)
```
