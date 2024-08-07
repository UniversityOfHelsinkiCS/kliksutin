import { useQuery } from '@tanstack/react-query'

import apiClient from '../util/apiClient'

import { Recommendation } from '../types'

const useRecommendations = (surveyId: number | undefined) => {
  const queryKey = ['recommendations', surveyId]

  const queryFn = async (): Promise<Recommendation[]> => {
    const { data } = await apiClient.get(`/recommendations/${surveyId}`)

    return data
  }

  const { data: recommendations, ...rest } = useQuery({
    queryKey,
    queryFn,
    enabled: Boolean(surveyId),
  })

  return { recommendations, ...rest }
}

export default useRecommendations
