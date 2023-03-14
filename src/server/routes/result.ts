import express from 'express'

import { RequestWithUser } from '../types'
import { Result } from '../db/models'

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
  const { data } = req.body
  const { isAdmin } = req.user

  console.log(JSON.stringify(req.user, null, 2))

  if (!isAdmin) throw new Error('Unauthorized')

  const result = await Result.findByPk(id)

  if (!result) throw new Error('Result not found')

  result.data = data
  await result.save()

  return res.send(result)
})
