import { useState, useEffect } from 'react'

import apiClient from '../util/apiClient'
import { DimensionData } from '../types'

const useRecommendations = (): DimensionData[] => {
  const [recommendations, setRecommendations] = useState(null)

  useEffect(() => {
    apiClient
      .get('/recommendations/0')
      .then(({ data }) => setRecommendations(data))
  }, [])

  return recommendations
}

export default useRecommendations
