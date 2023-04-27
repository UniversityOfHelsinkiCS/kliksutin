import axios from 'axios'

import { PUBLIC_URL } from '../../config'

const getApiClient = () => {
  const isPublicVersion = window.location.href.includes('/public')

  const baseURL = isPublicVersion
    ? `${PUBLIC_URL}/api`
    : `${PUBLIC_URL}/public/api`

  const apiClient = axios.create({ baseURL })

  return apiClient
}

export default getApiClient()
