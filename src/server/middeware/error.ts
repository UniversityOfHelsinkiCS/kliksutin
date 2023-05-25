import { Request, Response, NextFunction } from 'express'
import { ValidationError, UniqueConstraintError } from 'sequelize'

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
    return res
      .status(401)
      .send({ error: 'Unauthorized access', data: { error } })
  }
  if (error.name === 'SequelizeValidationError') {
    return res
      .status(400)
      .send({ error: error.message, data: (error as ValidationError).errors })
  }
  if (error.name === 'SequelizeUniqueConstraintError') {
    return res
      .status(400)
      .send({
        error: error.message,
        data: (error as UniqueConstraintError).errors,
      })
  }
  if (error.message === 'Survey not found') {
    return res.status(404).send({ error: 'Survey not found', data: { error } })
  }
  if (error.message === 'Question not found') {
    return res
      .status(404)
      .send({ error: 'Question not found', data: { error } })
  }
  if (error.message === 'Option not found') {
    return res.status(404).send({ error: 'Option not found', data: { error } })
  }
  if (error.message === 'Recommendation not found') {
    return res
      .status(404)
      .send({ error: 'Recommendation not found', data: { error } })
  }
  if (error.message === 'Result not found') {
    return res.status(404).send({ error: 'Result not found', data: { error } })
  }
  if (error.message === 'Open AI service unavailable') {
    return res
      .status(503)
      .send({
        error: 'Open AI service unavailable, try again shortly',
        data: { error },
      })
  }

  return next(error)
}

export default errorHandler
