import axios from 'axios'
import { IMPORTER_URL, API_TOKEN } from './config'
import { Course } from '../types'

export const importerClient = axios.create({
  baseURL: IMPORTER_URL,
  params: {
    token: API_TOKEN,
  },
})

export const getUserCoursesFromImporter = async (
  userId: string
): Promise<Course[]> => {
  const { data }: { data: Course[] } = await importerClient.get(
    `/courses/${userId}`
  )

  return data
}

export const getCourseFromImporter = async (
  courseId: string
): Promise<Course> => {
  const { data }: { data: Course } = await importerClient.get(
    `/course/${courseId}`
  )

  return data
}
