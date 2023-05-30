import { useMutation } from 'react-query'
import { Result } from '../types'

import apiClient from '../util/apiClient'

type MutationData = Pick<Result, 'data' | 'isSelected'>

const useEditResultMutation = (resultId: number) => {
  const mutationFn = async (data: MutationData) => {
    await apiClient.put(`/results/${resultId}`, {
      data,
    })
  }

  const mutation = useMutation(mutationFn)

  return mutation
}

export default useEditResultMutation
