import { useQuery } from '@tanstack/react-query'

import { Question } from '@backend/types'

import apiClient from '../util/apiClient'

const useQuestions = (surveyId: number | undefined) => {
  const queryKey = ['questions', surveyId]

  const queryFn = async (): Promise<Question[]> => {
    const { data } = await apiClient.get(`/questions/${surveyId}`)

    return data
  }

  const { data: questions, ...rest } = useQuery({
    queryKey,
    queryFn,
    enabled: Boolean(surveyId),
  })

  return { questions, ...rest }
}

export default useQuestions
