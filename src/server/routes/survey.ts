import express from 'express'

import adminHandler from '../middleware/admin'
import { getSurvey, updateSurvey } from '../services/survey'

const surveyRouter = express.Router()

surveyRouter.get('/:name', async (req, res) => {
  const { name } = req.params

  const survey = await getSurvey(name)

  return res.send(survey)
})

surveyRouter.put('/:name', adminHandler, async (req, res) => {
  const { name } = req.params

  const survey = await updateSurvey(name, req.body)

  return res.send(survey)
})

export default surveyRouter
