import axios from 'axios'
import { JAMI_URL, API_TOKEN } from './config'
import { OrganisationData } from '../types'

export const jamiClient = axios.create({
  baseURL: JAMI_URL,
  params: {
    token: API_TOKEN,
  },
})

export const getOrganisationData = async (): Promise<OrganisationData[]> => {
  const { data } = await jamiClient.get('/organisation-data')

  return data
}