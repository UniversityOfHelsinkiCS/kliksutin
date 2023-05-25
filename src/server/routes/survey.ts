import express from 'express'

import { Survey, Question } from '../db/models'

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

export default surveyRouter
