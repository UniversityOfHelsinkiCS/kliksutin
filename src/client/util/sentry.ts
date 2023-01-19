import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import { /* inProduction, inStaging, inE2EMode, */ GIT_SHA } from '../../config'

const initializeSentry = () => {
  // if (!inProduction || inStaging || inE2EMode) return

  Sentry.init({
    dsn: 'https://df9acc7c370a4a7396e99888a8f3eadb@sentry.cs.helsinki.fi/15',
    release: GIT_SHA,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}

export default initializeSentry
