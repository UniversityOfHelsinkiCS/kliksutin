import { useMutation } from 'react-query'
import { Result } from '../types'

import apiClient from '../util/apiClient'

const useEditResultMutation = (resultId: number) => {
  const mutationFn = async (data: Result['data']) => {
    await apiClient.put(`/results/${resultId}`, {
      data,
    })
  }

  const mutation = useMutation(mutationFn)

  return mutation
}

export default useEditResultMutation
