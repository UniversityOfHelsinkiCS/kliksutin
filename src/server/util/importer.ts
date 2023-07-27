import axios from 'axios'
import { IMPORTER_URL, API_TOKEN } from './config'

export const importerClient = axios.create({
  baseURL: IMPORTER_URL,
  params: {
    token: API_TOKEN,
  },
})

export const getTeacherCourses = async (userId: string): Promise<any[]> => {
  const { data } = await importerClient.get(`/courses/${userId}`)

  return data
}
