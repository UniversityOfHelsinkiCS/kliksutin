import { useQuery } from '@tanstack/react-query'

import { DEFAULT_SURVEY_NAME } from '../../config'

import apiClient from '../util/apiClient'

import { Survey } from '../types'

const useSurvey = (name = DEFAULT_SURVEY_NAME) => {
  const queryKey = ['survey', name]

  const queryFn = async (): Promise<Survey> => {
    const { data } = await apiClient.get(`/surveys/${name}`)

    return data
  }

  const { data: survey, ...rest } = useQuery({ queryKey, queryFn })

  return { survey, ...rest }
}

export default useSurvey
