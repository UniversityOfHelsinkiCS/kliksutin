/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from 'react-query'

import useSurvey from './useSurvey'

import { Locales } from '../types'
import { NewDimension } from '../validators/options'

import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'

type DimensionUpdates = {
  title: Locales
  text: Locales
}

export const useCreateDimensionMutation = () => {
  const { survey } = useSurvey()

  const dimensionquestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const mutationFn = async (data: NewDimension) => {
    await apiClient.post(`/questions/${dimensionquestion.id}/option/`, data)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['questions', survey.id],
      }),
  })

  return mutation
}

export const useEditDimensionMutation = (dimensionId: string) => {
  const { survey } = useSurvey()

  const dimensionquestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const mutationFn = async (data: DimensionUpdates) => {
    await apiClient.put(
      `/questions/${dimensionquestion.id}/option/${dimensionId}`,
      data
    )
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['questions', survey.id],
      }),
  })

  return mutation
}

export const useDeleteDimensionMutation = (dimensionId: string) => {
  const { survey } = useSurvey()

  const dimensionquestion = survey.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const mutationFn = async () => {
    await apiClient.delete(
      `/questions/${dimensionquestion.id}/option/${dimensionId}`
    )
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['questions', survey.id],
      }),
  })

  return mutation
}
