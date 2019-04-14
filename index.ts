import express from 'express'
import routes from './routes'
import morgan from 'morgan'
import * as signale from 'signale'
import chalk from 'chalk'
import http from 'http'
import bodyParser from 'body-parser'
import _ from 'lodash'

import { redisCache } from './services/redis'

const app = express()

// to move to .env
process.env.TIMEOUT = (60 as unknown) as string // 60 seconds

app.use(bodyParser.json())

app.use('*', (req, res, next) => {
  _.set(req, 'locals.redisCache', redisCache)
  next()
})

app.use(morgan(':date[clf] ":method :url"'))

app.use('/', routes)

// app.use('*', (req, res) => {
//   res.status(500).send("For everything else there's MasterCard")
// })

// app.listen('3000', () => {
//   signale.start(`${Chalk.blue('Server running')} on port ${Chalk.cyan('3000')}`)
// })

const server = http.createServer(app)

// ------- Start Server -------
setImmediate(() => {
  server.listen(3000, () => {
    signale.info(
      `${chalk.blue('Server running')} on port ${chalk.cyan('3000')}`
    )
  })
})
