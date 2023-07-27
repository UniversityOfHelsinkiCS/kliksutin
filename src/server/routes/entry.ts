import express from 'express'
import { Entry } from '../db/models'

import { EntryValues, RequestWithUser } from '../types'

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
  const { data, sessionToken } = req.body as EntryValues
  const userId = req.user?.id || `publicUser-${sessionToken}`

  const existingEntry = await Entry.findOne({
    where: {
      surveyId,
      userId,
      sessionToken,
      data: {
        course: data.course,
      },
    },
  })

  if (existingEntry) {
    await existingEntry.update({
      data,
    })

    return res.status(200).send(existingEntry)
  }

  const newEntry = await Entry.create({
    surveyId: Number(surveyId),
    userId,
    data,
    sessionToken,
    reminderSent: false,
  })

  return res.status(201).send(newEntry)
})

export default entryRouter
