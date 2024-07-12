import { useQuery } from '@tanstack/react-query'

import apiClient from '../util/apiClient'

import { Faculty } from '../types'

const useUserFaculties = () => {
  const queryKey = ['userFaculties']

  const queryFn = async (): Promise<Faculty[]> => {
    const { data } = await apiClient.get('/faculties/user')

    return data
  }

  const { data: userFaculties, ...rest } = useQuery({ queryKey, queryFn })

  return { userFaculties, ...rest }
}

export default useUserFaculties
