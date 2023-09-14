import express from 'express'

import adminHandler from '../middleware/admin'
import {
  createRecommendation,
  deleteRecommendation,
  getRecommendations,
  updateRecommendation,
  updateRecommendationDimensions,
} from '../services/recommendation'

const recommendationRouter = express.Router()

recommendationRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  const recommendations = await getRecommendations(surveyId)

  return res.status(200).send(recommendations)
})

recommendationRouter.put('/:id', adminHandler, async (req, res) => {
  const { id } = req.params

  const updatedRecommendation = await updateRecommendation(id, req.body)

  return res.status(200).send(updatedRecommendation)
})

recommendationRouter.put('/:id/dimensions', adminHandler, async (req, res) => {
  const { id } = req.params

  const updatedRecommendation = await updateRecommendationDimensions(
    id,
    req.body
  )

  return res.status(200).send(updatedRecommendation)
})

recommendationRouter.post('/:surveyId', adminHandler, async (req, res) => {
  const { surveyId } = req.params

  const newRecommendation = await createRecommendation(surveyId, req.body)

  return res.status(201).send(newRecommendation)
})

recommendationRouter.delete('/:id', adminHandler, async (req, res) => {
  const { id } = req.params

  const deletedRecommendation = await deleteRecommendation(id)

  return res.status(204).send(deletedRecommendation)
})

export default recommendationRouter
