import axios from 'axios'
import { IMPORTER_URL, API_TOKEN } from './config'

export const importerClient = axios.create({
  baseURL: IMPORTER_URL,
  params: {
    token: API_TOKEN,
  },
})

export const getCourseData = async (userId: string) => {
  const courses = await importerClient.get(`/courses/${userId}`)

  return courses
}
