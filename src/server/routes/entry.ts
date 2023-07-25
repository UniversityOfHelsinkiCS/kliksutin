import express from 'express'

import { RequestWithUser } from '../types'
import { Entry } from '../db/models'

const entryRouter = express.Router()

entryRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  const entries = await Entry.findAll({
    where: {
      surveyId: Number(surveyId),
    },
  })

  return res.status(200).send(entries)
})

entryRouter.post('/:surveyId', async (req: RequestWithUser, res: any) => {
  const { surveyId } = req.params
  const { id: userId } = req.user
  const { data } = req.body

  const entry = await Entry.create({
    surveyId: Number(surveyId),
    userId,
    data,
  })

  return res.status(201).send(entry)
})

export default entryRouter
