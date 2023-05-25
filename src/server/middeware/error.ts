import { Request, Response, NextFunction } from 'express'

import Sentry from '@sentry/node'

import logger from '../util/logger'
import { inProduction } from '../../config'

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`${error.message} ${error.name} ${error.stack}`)

  if (inProduction) Sentry.captureException(error)

  if (error.message === 'Unauthorized') {
    return res.status(401).send({ error: 'Unauthorized access' })
  }
  if (error.name === 'SequelizeValidationError') {
    return res.status(400).send({ error: error.message })
  }
  if (error.message === 'Survey not found') {
    return res.status(404).send({ error: 'Survey not found' })
  }
  if (error.message === 'Question not found') {
    return res.status(404).send({ error: 'Question not found' })
  }
  if (error.message === 'Option not found') {
    return res.status(404).send({ error: 'Option not found' })
  }
  if (error.message === 'Recommendation not found') {
    return res.status(404).send({ error: 'Recommendation not found' })
  }
  if (error.message === 'Result not found') {
    return res.status(404).send({ error: 'Result not found' })
  }
  if (error.message === 'Open AI service unavailable') {
    return res
      .status(503)
      .send({ error: 'Open AI service unavailable, try again shortly' })
  }

  return next(error)
}

export default errorHandler
