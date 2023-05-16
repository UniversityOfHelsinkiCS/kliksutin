import { useMutation } from 'react-query'
import { Locales } from '../types'

import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'
import useSurvey from './useSurvey'

type RecommendationUpdates = {
  title: Locales
  text: Locales
}

const useEditRecommendationMutation = (recommendationId: number) => {
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

export default useEditRecommendationMutation
