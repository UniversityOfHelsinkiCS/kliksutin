import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import { inProduction, inStaging, inE2EMode, GIT_SHA } from '../../config'

const initializeSentry = () => {
  if (!inProduction || inStaging || inE2EMode) return

  Sentry.init({
    dsn: 'https://72e49107b76381db56da800209363389@toska.cs.helsinki.fi/12',
    release: GIT_SHA,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}

export default initializeSentry
