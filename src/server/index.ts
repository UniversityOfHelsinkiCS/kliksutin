import express from 'express'
import cors from 'cors'
import path from 'path'
import { Handlers as SentryHandlers } from '@sentry/node'
import initializeSentry from './util/sentry'

import { PORT } from './util/config'
import { connectToDatabase } from './db/connection'
import seed from './db/seeders'
import logger from './util/logger'
import errorHandler from './middeware/errorHandler'
import facultyRouter from './routes/faculty'
import surveyRouter from './routes/survey'

const app = express()

app.use(cors())
app.use(express.json())

initializeSentry(app)

app.use(SentryHandlers.requestHandler())
app.use(SentryHandlers.tracingHandler())

app.use('/api/faculties', facultyRouter)
app.use('/api/surveys', surveyRouter)

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  const DIST_PATH = path.resolve(__dirname, '../../build')
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (req, res) => res.sendFile(INDEX_PATH))
}

app.use(SentryHandlers.errorHandler())
app.use(errorHandler)

app.listen(PORT, async () => {
  await connectToDatabase()
  await seed()

  logger.info(`Server running on port ${PORT}`)
})
