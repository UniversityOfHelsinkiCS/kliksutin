import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import Sentry from '@sentry/node'

import initializeSentry from './util/sentry.js'
import logger from './util/logger.js'
import errorHandler from './middeware/errorHandler.js'

const app = express()

initializeSentry(app)

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())

app.get('/api/kliks', (req, res) => {
  logger.info('klik request made')
  const result = ['klik']
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < Math.random() * 4; i++) {
    result.push('klik')
  }
  res.send(result.join(' '))
})

app.use('/api', (_, res) => res.sendStatus(404))

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  const filename = fileURLToPath(import.meta.url)
  const dirname = path.dirname(filename)
  const DIST_PATH = path.resolve(dirname, '../../build')
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (req, res) => res.sendFile(INDEX_PATH))
}

app.use(Sentry.Handlers.errorHandler())
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
