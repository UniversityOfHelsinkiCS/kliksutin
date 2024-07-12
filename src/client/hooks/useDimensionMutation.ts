import { useMutation } from '@tanstack/react-query'
import useSurvey from './useSurvey'

import { NewDimension, UpdatedDimension } from '../../validators/options'

import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'

export const useCreateDimensionMutation = () => {
  const { survey } = useSurvey()

  const dimensionquestion = survey?.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const mutationFn = async (data: NewDimension) => {
    await apiClient.post(`/questions/${dimensionquestion?.id}/dimension/`, data)
  }

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['survey'] }),
  })

  return mutation
}

export const useEditDimensionMutation = (dimensionId: string) => {
  const { survey } = useSurvey()

  const dimensionquestion = survey?.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const mutationFn = async (data: UpdatedDimension) => {
    await apiClient.put(
      `/questions/${dimensionquestion?.id}/dimension/${dimensionId}`,
      data
    )
  }

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['survey'] }),
  })

  return mutation
}

export const useDeleteDimensionMutation = (dimensionId: string) => {
  const { survey } = useSurvey()

  const dimensionquestion = survey?.Questions.find(
    (question) => question.optionData.type === 'dimensions'
  )

  const mutationFn = async () => {
    await apiClient.delete(
      `/questions/${dimensionquestion?.id}/option/${dimensionId}`
    )
  }

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['survey'] }),
  })

  return mutation
}
