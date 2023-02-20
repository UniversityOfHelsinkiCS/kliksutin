import { useState, useEffect } from 'react'
import axios from 'axios'

import { PUBLIC_URL } from '../../config'
import { DimensionData } from '../types'

const useRecommendations = (): DimensionData[] => {
  const [recommendations, setRecommendations] = useState(null)

  useEffect(() => {
    axios
      .get(`${PUBLIC_URL}/api/recommendations/0`)
      .then(({ data }) => setRecommendations(data))
  }, [])

  return recommendations
}

export default useRecommendations
