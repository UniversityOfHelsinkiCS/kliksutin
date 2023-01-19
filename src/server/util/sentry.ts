import Sentry from '@sentry/node'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Tracing from '@sentry/tracing'
import { Express } from 'express-serve-static-core'

import { inProduction, inStaging, inE2EMode, GIT_SHA } from '../../config.js'

const initializeSentry = (router: Express) => {
  if (!inProduction || inStaging || inE2EMode) return

  Sentry.init({
    dsn: 'https://df9acc7c370a4a7396e99888a8f3eadb@sentry.cs.helsinki.fi/15',
    release: GIT_SHA,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ router }),
    ],
    tracesSampleRate: 1.0,
  })
}

export default initializeSentry
