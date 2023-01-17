import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import logger from './util/logger.js'

const app = express()

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

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
