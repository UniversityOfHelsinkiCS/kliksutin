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

export const validModels = [
  {
    name: 'gpt-3.5-turbo',
    deployment: process.env.GPT_35_TURBO || 'curredev35',
    context: 16_384,
  },
  {
    name: 'gpt-4',
    deployment: process.env.GPT_4 || 'curredev4',
    context: 128_000,
  },
].concat(
  // Add mock model if not in production
  inProduction
    ? []
    : [
        {
          name: 'mock',
          deployment: 'mock',
          context: 128_000,
        },
      ]
)
