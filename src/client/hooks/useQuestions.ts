import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'
import { Question } from '../types'

const useQuestions = (surveyId: number | undefined) => {
  const queryKey = ['questions', surveyId]

  const query = async (): Promise<Question[]> => {
    const { data } = await apiClient.get(`/questions/${surveyId}`)

    return data
  }

  const { data: questions, ...rest } = useQuery(queryKey, query, {
    enabled: Boolean(surveyId),
  })

  return { questions, ...rest }
}

export default useQuestions
