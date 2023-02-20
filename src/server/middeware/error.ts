import Sentry from '@sentry/node'

import logger from '../util/logger'

const errorHandler = (error, _req, _res, next) => {
  logger.error(`${error.message} ${error.name} ${error.stack}`)

  Sentry.captureException(error)

  return next(error)
}

export default errorHandler
