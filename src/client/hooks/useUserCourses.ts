import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'
import { Course } from '../types'

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
