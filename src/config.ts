export const inDevelopment = process.env.NODE_ENV === 'development'

export const inStaging = process.env.REACT_APP_STAGING === 'true'

export const inProduction = !inStaging && process.env.NODE_ENV === 'production'

export const inE2EMode = process.env.REACT_APP_E2E === 'true'

export const GIT_SHA = process.env.REACT_APP_GIT_SHA || ''

export const PUBLIC_URL = process.env.PUBLIC_URL || ''

export const DEFAULT_SURVEY_NAME =
  process.env.DEFAULT_SURVEY_NAME || 'testSurvey'

export const FORM_DATA_KEY = 'curre_local_save'

export const SESSION_TOKEN = 'curre_session_token'

// eslint-disable-next-line no-nested-ternary
export const FULL_URL = inProduction
  ? 'https://curre.helsinki.fi'
  : inStaging
  ? 'https://toska-staging.cs.helsinki.fi/kliksutin'
  : 'http://localhost:3000'
