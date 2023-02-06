import { useState, useEffect } from 'react'
import axios from 'axios'
import { Survey } from '../types'
import { BASE_PATH } from '../../config'

function useSurvey(): Survey {
  const [survey, setSurvey] = useState(null)

  useEffect(() => {
    const fetchSurveyData = async () => {
      await axios
        .get(`${BASE_PATH}api/surveys/0`)
        .then((facultyData) => setSurvey(facultyData.data))
    }
    fetchSurveyData()
  }, [])

  return survey
}

export default useSurvey
