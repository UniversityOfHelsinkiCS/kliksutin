import express from 'express'

import { Result } from '../db/models'

const resultRouter = express.Router()

resultRouter.get('/:id', async (req, res) => {
  const { id } = req.params

  const results = await Result.findAll({
    where: {
      surveyId: id,
    },
  })

  return res.send(results)
})

export default resultRouter
