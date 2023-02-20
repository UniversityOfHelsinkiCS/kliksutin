import { useState, useEffect } from 'react'

import apiClient from '../util/apiClient'
import { Survey } from '../types'

const useSurvey = (): Survey => {
  const [survey, setSurvey] = useState(null)

  useEffect(() => {
    apiClient.get('/surveys/0').then(({ data }) => setSurvey(data))
  }, [])

  return survey
}

export default useSurvey
