import { useMutation } from 'react-query'

import useSurvey from './useSurvey'

import { Locales } from '../types'
import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'

type OptionUpdates = {
  title: Locales
  data?: Locales
}

export const useEditOptionMutation = (questionId: number, optionId: string) => {
  const { survey } = useSurvey()

  const mutationFn = async (data: OptionUpdates) => {
    await apiClient.put(`/questions/${questionId}/option/${optionId}`, data)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['questions', survey.id],
      }),
  })

  return mutation
}

export const useDeleteOptionMutation = (
  questionId: number,
  optionId: string
) => {
  const { survey } = useSurvey()

  const mutationFn = async () => {
    await apiClient.delete(`/questions/${questionId}/option/${optionId}`)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['questions', survey.id],
      }),
  })

  return mutation
}
