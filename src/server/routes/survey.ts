import express from 'express'

import { Survey, Question } from '../db/models'

const surveyRouter = express.Router()

surveyRouter.get('/:id', async (req, res) => {
  const { id } = req.params

  const survey = await Survey.findByPk(id, {
    include: {
      model: Question,
    },
  })

  return res.send(survey)
})

export default surveyRouter
