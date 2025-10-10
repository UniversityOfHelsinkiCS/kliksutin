import axios from 'axios'

import { PUBLIC_URL } from '../../config'

const isPublicVersion = window.location.href.includes('/public')

const baseURL = isPublicVersion
  ? `${PUBLIC_URL}/public/api`
  : `${PUBLIC_URL}/api`

const apiClient = axios.create({ baseURL })

export default apiClient
