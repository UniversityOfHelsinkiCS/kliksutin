import axios from 'axios'
import { JAMI_URL, inProduction } from '../../config.js'

const API_TOKEN = process.env

export const jamiClient = axios.create({
  baseURL: JAMI_URL,
  params: {
    token: API_TOKEN,
    noLogging: !inProduction,
  },
})

export const getOrganisationData = async () => {
  const { data } = await jamiClient.get('/organisation-data')

  return data
}
