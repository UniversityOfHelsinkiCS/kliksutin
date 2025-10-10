import axios from 'axios'

import { PUBLIC_URL } from '../../config'

const isPublicVersion = window.location.href.includes('/public')

const baseURL = isPublicVersion
  ? `${PUBLIC_URL}/kuraattori/public/api`
  : `${PUBLIC_URL}/kuraattori/api`

const apiClient = axios.create({ baseURL })

export default apiClient
