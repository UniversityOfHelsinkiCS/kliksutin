import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'
import { Survey } from '../types'

const useSurvey = () => {
  const queryKey = 'survey'

  const query = async (): Promise<Survey> => {
    const { data } = await apiClient.get('/surveys/0')

    return data
  }

  const { data: survey, ...rest } = useQuery(queryKey, query)

  return { survey, ...rest }
}

export default useSurvey
