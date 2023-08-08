import express from 'express'

import { RequestWithUser } from '@backend/types'

import { Survey, Question } from '../db/models'

import { UpdatedSurveyInfoZod } from '../../validators/survey'

const surveyRouter = express.Router()

const sortByPriority = (a: Question, b: Question) => a.priority - b.priority

surveyRouter.get('/:name', async (req, res) => {
  const { name } = req.params

  const survey = await Survey.findOne({
    where: {
      name,
    },
    include: {
      model: Question,
    },
  })

  if (!survey) throw new Error('Survey not found')

  survey.Questions = survey.Questions.sort(sortByPriority)

  return res.send(survey)
})

surveyRouter.put('/:name', async (req: RequestWithUser, res: any) => {
  const { name } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const survey = await Survey.findOne({
    where: {
      name,
    },
    include: {
      model: Question,
    },
  })

  if (!survey) throw new Error('Survey not found')

  const request = UpdatedSurveyInfoZod.safeParse(req.body)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  Object.assign(survey, body)

  await survey.save()

  return res.send(survey)
})

export default surveyRouter
