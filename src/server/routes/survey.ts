import express from 'express'

import { Survey, Question } from '../db/models'

const surveyRouter = express.Router()

const sortByPriority = (a: Question, b: Question) => a.priority - b.priority

surveyRouter.get('/:id', async (req, res) => {
  const { id } = req.params

  const survey = await Survey.findByPk(id, {
    include: {
      model: Question,
    },
  })

  survey.Questions = survey.Questions.sort(sortByPriority)

  return res.send(survey)
})

export default surveyRouter
