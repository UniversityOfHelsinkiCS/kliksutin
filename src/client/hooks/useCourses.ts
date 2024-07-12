import { useQuery } from '@tanstack/react-query'

import { Course } from '@backend/types'
import apiClient from '../util/apiClient'

export const useUserCourses = () => {
  const queryKey = ['userCourses']

  const query = async (): Promise<Course[]> => {
    const { data } = await apiClient.get('/courses/teacher')

    return data
  }

  const { data: userCourses, ...rest } = useQuery(queryKey, query)

  return { userCourses, ...rest }
}

export const useCourse = (courseId: string | undefined) => {
  const queryKey = ['course', courseId]

  const query = async (): Promise<Course> => {
    const { data } = await apiClient.get(`/courses/course/${courseId}`)

    return data
  }

  const { data: course, ...rest } = useQuery(queryKey, query, {
    enabled: Boolean(courseId),
  })

  return { course, ...rest }
}
