import { Result, Survey } from '../db/models'

import {
  NewResult,
  NewResultZod,
  UpdatedResult,
  UpdatedResultZod,
} from '../../validators/results'

export const getResults = async (surveyId: string): Promise<Result[]> => {
  const results = await Result.findAll({
    where: {
      surveyId,
    },
  })

  return results
}

export const updateResult = async (
  resultId: string,
  updatedResultValues: UpdatedResult
): Promise<Result> => {
  const result = await Result.findByPk(resultId)

  if (!result) throw new Error('Result not found')

  const request = UpdatedResultZod.safeParse(updatedResultValues)

  if (!request.success) throw new Error('Validation failed')
  const { data } = request

  Object.assign(result, data)
  await result.save()

  return result
}

export const createResult = async (
  surveyId: string,
  newResultValues: NewResult
): Promise<Result> => {
  const survey = await Survey.findByPk(surveyId)

  if (!survey) throw new Error('Survey not found')

  const request = NewResultZod.safeParse(newResultValues)

  if (!request.success) throw new Error('Validation failed')
  const { data } = request

  const newResult = await Result.create({
    surveyId: Number(surveyId),
    ...data,
  })

  return newResult
}

export const deleteResult = async (resultId: string): Promise<Result> => {
  const result = await Result.findByPk(resultId)

  if (!result) throw new Error('Result not found')

  await result.destroy()

  return result
}
