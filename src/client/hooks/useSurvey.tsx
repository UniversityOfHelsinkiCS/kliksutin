import { useState, useEffect } from 'react'
import axios from 'axios'
import { Survey } from '../types'

function useSurvey(): Survey {
  const [survey, setSurvey] = useState(null)

  useEffect(() => {
    axios
      .get('/api/surveys/0')
      .then((facultyData) => setSurvey(facultyData.data))
  }, [])

  return survey
}

export default useSurvey
