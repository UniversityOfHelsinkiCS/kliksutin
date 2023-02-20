import { useState, useEffect } from 'react'
import axios from 'axios'
import { Survey } from '../types'
import { PUBLIC_URL } from '../../config'

const useSurvey = (): Survey => {
  const [survey, setSurvey] = useState(null)

  useEffect(() => {
    axios.get(`${PUBLIC_URL}/api/surveys/0`).then(({ data }) => setSurvey(data))
  }, [])

  return survey
}

export default useSurvey
