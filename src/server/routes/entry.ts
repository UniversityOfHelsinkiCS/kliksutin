import express, { Request } from 'express'

import { User } from '../types'
import { Entry } from '../db/models'

interface RequestWithUser extends Request {
  user: User
}

const entryRouter = express.Router()

entryRouter.post('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  const { id: userId } = req.user
  const { data } = req.body

  const entry = await Entry.create({
    surveyId: Number(id),
    userId,
    data,
  })

  return res.status(201).send(entry)
})

export default entryRouter
