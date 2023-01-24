import axios from 'axios'
import { JAMI_URL, inProduction } from '../../config.js'
import { OrganisationData } from '../types.js'

const API_TOKEN = process.env

export const jamiClient = axios.create({
  baseURL: JAMI_URL,
  params: {
    token: API_TOKEN,
    noLogging: !inProduction,
  },
})

export const getOrganisationData = async (): Promise<OrganisationData> => {
  const { data } = await jamiClient.get('/organisation-data')

  return data
}
