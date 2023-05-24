import { useMutation } from 'react-query'

import useSurvey from './useSurvey'

import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'

import { Locales, NewRecommendation } from '../types'

type RecommendationUpdates = {
  title: Locales
  text: Locales
}

export const useEditRecommendationMutation = (recommendationId: number) => {
  const { survey } = useSurvey()

  const mutationFn = async (data: RecommendationUpdates) => {
    await apiClient.put(`/recommendations/${recommendationId}`, data)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['recommendations', survey.id],
      }),
  })

  return mutation
}

export const useCreateRecommendationMutation = () => {
  const { survey } = useSurvey()

  const mutationFn = async (data: NewRecommendation) => {
    await apiClient.post(`/recommendations/${survey.id}`, data)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['recommendations', survey.id],
      }),
  })

  return mutation
}
