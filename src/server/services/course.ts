import { Course } from '../types'
import { inE2EMode } from '../../config'

import mockCourse from '../mocs/course'
import {
  getUserCoursesFromImporter,
  getCourseFromImporter,
} from '../util/importer'

export const getCourse = async (courseId: string): Promise<Course> => {
  if (inE2EMode) return mockCourse

  const course = await getCourseFromImporter(courseId)

  if (!course) throw new Error('Course not found')

  return course
}

export const getUserCourses = async (userId: string): Promise<Course[]> => {
  if (inE2EMode) return [mockCourse]

  if (!userId) return []

  const courses = (await getUserCoursesFromImporter(userId)) || []

  return courses
}
