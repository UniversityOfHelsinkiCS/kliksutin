export const inProduction = process.env.NODE_ENV === 'production'

export const inStaging = process.env.REACT_APP_STAGING === 'true'

export const inE2EMode = process.env.REACT_APP_E2E === 'true'

export const GIT_SHA = process.env.REACT_APP_GIT_SHA || ''
