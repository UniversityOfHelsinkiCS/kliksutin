import { init as initSentry, Integrations } from '@sentry/node'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Integrations as TracingIntegrations } from '@sentry/tracing'
import { Express } from 'express-serve-static-core'

import { inProduction, inStaging, inE2EMode, GIT_SHA } from '../../config'

const initializeSentry = (router: Express) => {
  if (!inProduction || inStaging || inE2EMode) return

  initSentry({
    dsn: 'https://72e49107b76381db56da800209363389@toska.cs.helsinki.fi/12',
    release: GIT_SHA,
    integrations: [
      new Integrations.Http({ tracing: true }),
      new TracingIntegrations.Express({ router }),
    ],
    tracesSampleRate: 1.0,
  })
}

export default initializeSentry
