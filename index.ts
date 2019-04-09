import express from 'express'
import routes from './routes'
import morgan from 'morgan'
import * as Signale from 'signale'
import Chalk from 'chalk'

const app = express()

app.use(morgan(':date[clf] ":method :url"'))

app.use('/', routes)

app.use('*', (req, res) => {
  res.status(500).send('For everything else there\'s MasterCard')
})

app.listen('3000', () => {
  Signale.start(`${Chalk.blue('Server running')} on port ${Chalk.cyan('3000')}`)
})
