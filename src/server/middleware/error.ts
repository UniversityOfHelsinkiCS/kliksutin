import { Request, Response, NextFunction } from 'express'
import { ValidationError, UniqueConstraintError } from 'sequelize'

import Sentry from '@sentry/node'

import ZodValidationError from '../errors/ValidationError'
import logger from '../util/logger'
import { inProduction } from '../../config'

const notFoundError = (res: Response, error: any) =>
  res.status(404).send({ error, data: null })

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`${error.message} ${error.name} ${error.stack}`)

  if (inProduction) Sentry.captureException(error)

  if (error.message === 'Unauthorized') {
    return res.status(401).send({ error: 'Unauthorized access', data: null })
  }

  if (error.name === 'ZodValidationError') {
    return res
      .status(400)
      .send({
        error: error.message,
        data: (error as ZodValidationError).errors,
      })
  }

  if (error.name === 'SequelizeValidationError') {
    return res
      .status(400)
      .send({ error: error.message, data: (error as ValidationError).errors })
  }

  if (error.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).send({
      error: error.message,
      data: (error as UniqueConstraintError).errors,
    })
  }

  if (error.message === 'Course not found') {
    return notFoundError(res, 'Course not found')
  }

  if (error.message === 'Entry not found') {
    return notFoundError(res, 'Entry not found')
  }

  if (error.message === 'Survey not found') {
    return notFoundError(res, 'Survey not found')
  }

  if (error.message === 'Question not found') {
    return notFoundError(res, 'Question not found')
  }

  if (error.message === 'Option not found') {
    return notFoundError(res, 'Option not found')
  }

  if (error.message === 'Recommendation not found') {
    return notFoundError(res, 'Recommendation not found')
  }

  if (error.message === 'Result not found') {
    return notFoundError(res, 'Result not found')
  }

  if (error.message === 'Open AI service unavailable') {
    return res.status(503).send({
      error: 'Open AI service unavailable, try again shortly',
      data: { error },
    })
  }

  return next(error)
}

export default errorHandler
