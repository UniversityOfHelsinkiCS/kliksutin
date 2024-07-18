import path from 'path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'express-async-errors'
import express from 'express'

import router from './routes'

import seed from './db/seeders'
import { connectToDatabase } from './db/connection'

import logger from './util/logger'
import { PORT } from './util/config'

const app = express()

app.use(['/api', '/public/api'], (req, res, next) => router(req, res, next))
app.use(['/api', '/public/api'], (_, res) => res.sendStatus(404))

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  const DIST_PATH = path.resolve(
    dirname(fileURLToPath(import.meta.url)),
    '../../dist'
  )
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (_, res) => res.sendFile(INDEX_PATH))
}

app.listen(PORT, async () => {
  await connectToDatabase()
  await seed()

  logger.info(`Server running on port ${PORT}`)
})
