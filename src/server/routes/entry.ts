import express from 'express'

import { RequestWithUser } from '../types'
import { Entry } from '../db/models'

const entryRouter = express.Router()

entryRouter.post('/:surveyId', async (req: RequestWithUser, res) => {
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
