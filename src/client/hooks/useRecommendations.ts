import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'
import { DimensionData } from '../types'

const useRecommendations = () => {
  const queryKey = 'recommendations'

  const query = async (): Promise<DimensionData[]> => {
    const { data } = await apiClient.get('/recommendations/0')

    return data
  }

  const { data: recommendations, ...rest } = useQuery(queryKey, query)

  return { recommendations, ...rest }
}

export default useRecommendations
