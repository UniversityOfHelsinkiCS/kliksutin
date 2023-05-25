import { Request, Response, NextFunction } from 'express'

import Sentry from '@sentry/node'

import logger from '../util/logger'

const errorHandler = (
  error: Error,
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.error(`${error.message} ${error.name} ${error.stack}`)

  Sentry.captureException(error)

  return next(error)
}

export default errorHandler
