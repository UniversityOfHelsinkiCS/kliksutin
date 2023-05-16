import { useMutation } from 'react-query'
import { Locales } from '../types'

import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'
import useSurvey from './useSurvey'

type QuestionsUpdates = {
  title: Locales
  text: Locales
}

const useEditQuestionMutation = (questionId: number) => {
  const { survey } = useSurvey()

  const mutationFn = async (data: QuestionsUpdates) => {
    await apiClient.put(`/questions/${questionId}`, data)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['questions', survey.id] }),
  })

  return mutation
}

export default useEditQuestionMutation
