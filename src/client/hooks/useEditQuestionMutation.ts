import { useMutation } from 'react-query'
import { Locales } from '../types'

import apiClient from '../util/apiClient'

type QuestionsUpdates = {
  title: Locales
  text: Locales
}

const useEditQuestionMutation = (questionId: number) => {
  const mutationFn = async (data: QuestionsUpdates) => {
    await apiClient.put(`/questions/${questionId}`, data)
  }

  const mutation = useMutation(mutationFn)

  return mutation
}

export default useEditQuestionMutation
