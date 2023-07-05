import express from 'express'

import { Result, Survey } from '../db/models'

import { NewResultZod, UpdatedResultZod } from '../../validators/results'

import { RequestWithUser } from '../types'

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

resultRouter.put('/:id', async (req: RequestWithUser, res: any) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const result = await Result.findByPk(id)

  if (!result) throw new Error('Result not found')

  const request = UpdatedResultZod.safeParse(req.body)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  Object.assign(result, body)
  await result.save()

  return res.send(result)
})

resultRouter.post('/:surveyId', async (req: RequestWithUser, res: any) => {
  const { surveyId } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const survey = await Survey.findByPk(surveyId)
  if (!survey) throw new Error('Survey not found')

  const request = NewResultZod.safeParse(req.body)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  console.log(body)

  const recommendation = await Result.create({
    surveyId: Number(surveyId),
    ...body,
  })

  return res.status(201).send(recommendation)
})

resultRouter.delete('/:id', async (req: RequestWithUser, res: any) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const result = await Result.findByPk(id)
  if (!result) throw new Error('Result not found')

  await result.destroy()

  return res.sendStatus(204)
})
