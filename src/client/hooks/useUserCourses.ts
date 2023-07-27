import { useQuery } from 'react-query'

import { Course } from '@backend/types'

import apiClient from '../util/apiClient'

const useUserCourses = () => {
  const queryKey = 'userCourses'

  const query = async (): Promise<Course[]> => {
    const { data } = await apiClient.get('/courses')

    return data
  }

  const { data: userCourses, ...rest } = useQuery(queryKey, query)

  return { userCourses, ...rest }
}

export default useUserCourses
