import * as dotenv from 'dotenv'

import { inProduction, inStaging } from '../../config'

dotenv.config()

export const PORT = process.env.PORT || 8000

export const { API_TOKEN, OPENAI_API_KEY } = process.env

let connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DATABASE}?targetServerType=primary`

if (inProduction || inStaging) connectionString = `${connectionString}&ssl=true`

export const DB_CONNECTION_STRING = connectionString

export const JAMI_URL = inStaging
  ? 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/jami/'
  : 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/jami'

export const PATE_URL = inStaging
  ? 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/pate/'
  : 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/pate/'

export const IMPORTER_URL = inStaging
  ? 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/importer/kliksutin'
  : 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/importer/kliksutin'
