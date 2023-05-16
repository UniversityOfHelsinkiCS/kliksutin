import express from 'express'

import { Recommendation } from '../db/models'

import { RecommendationUpdates, RequestWithUser } from '../types'

const recommendationRouter = express.Router()

recommendationRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  const recommendations = await Recommendation.findAll({
    where: {
      surveyId,
    },
  })

  return res.send(recommendations)
})

recommendationRouter.put('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const recommendation = await Recommendation.findByPk(id)

  if (!recommendation) throw new Error('Recommendation not found')

  const updates: RecommendationUpdates = req.body

  Object.assign(recommendation, updates)

  await recommendation.save()

  return res.send(recommendation)
})

export default recommendationRouter
