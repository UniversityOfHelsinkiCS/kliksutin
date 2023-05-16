import { useMutation } from 'react-query'
import { Locales } from '../types'

import apiClient from '../util/apiClient'

type OptionUpdates = {
  title: Locales
  data?: Locales
}

const useEditOptionMutation = (questionId: number, optionId: string) => {
  const mutationFn = async (data: OptionUpdates) => {
    await apiClient.put(`/questions/${questionId}/option/${optionId}`, data)
  }

  const mutation = useMutation(mutationFn)

  return mutation
}

export default useEditOptionMutation
