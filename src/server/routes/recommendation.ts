import express from 'express'

import { Recommendation } from '../db/models'

const recommendationRouter = express.Router()

recommendationRouter.get('/:id', async (req, res) => {
  const { id } = req.params

  const recommendations = await Recommendation.findAll({
    where: {
      surveyId: id,
    },
  })

  return res.send(recommendations)
})

export default recommendationRouter
