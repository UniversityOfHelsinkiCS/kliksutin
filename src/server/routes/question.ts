import express from 'express'

import { RequestWithUser, ResultUpdates } from '../types'
import { Result } from '../db/models'

const parseUpdates = (body: ResultUpdates): ResultUpdates => ({
  data: body?.data,
  isSelected: body?.isSelected,
})

const resultRouter = express.Router()

resultRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  const results = await Result.findAll({
    where: {
      surveyId,
    },
  })

  return res.send(results)
})

export default resultRouter

resultRouter.put('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const result = await Result.findByPk(id)

  if (!result) throw new Error('Result not found')

  const updates = parseUpdates(req.body.data)

  Object.assign(result, updates)
  await result.save()

  return res.send(result)
})
