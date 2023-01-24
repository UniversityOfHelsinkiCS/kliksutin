import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import Sentry from '@sentry/node'
import initializeSentry from './util/sentry.js'
import logger from './util/logger.js'
import errorHandler from './middeware/errorHandler.js'
import facultyRouter from './routes/faculty.js'

const app = express()

app.use(cors())
app.use(express.json())

initializeSentry(app)

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())

app.use('/api/faculties', facultyRouter)

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
