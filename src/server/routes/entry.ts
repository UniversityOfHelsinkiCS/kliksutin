import express from 'express'
import { Entry } from '../db/models'

import { EntryValues, RequestWithUser } from '../types'

const entryRouter = express.Router()

entryRouter.get('/:entryId', async (req: RequestWithUser, res: any) => {
  const { entryId } = req.params
  const userId = req.user?.id

  const entry = await Entry.findByPk(entryId)

  if (!entry) throw new Error('Entry not found')

  if (entry.userId !== userId) throw new Error('Unauthorized')

  return res.status(200).send(entry)
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
