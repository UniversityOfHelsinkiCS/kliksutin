import express from 'express'

import adminHandler from '../middleware/admin'
import { createEntry, getEntries, getEntry } from '../services/entry'

import { EntryValues, RequestWithUser } from '../types'

const entryRouter = express.Router()

entryRouter.get('/', adminHandler, async (req, res) => {
  const entries = await getEntries()

  return res.status(200).send(entries)
})

entryRouter.get('/:entryId', async (req: RequestWithUser, res: any) => {
  const { entryId } = req.params
  const userId = req.user?.id

  const entry = await getEntry(entryId, userId)

  return res.status(200).send(entry)
})

entryRouter.post('/:surveyId', async (req: RequestWithUser, res: any) => {
  const { surveyId } = req.params
  const { sessionToken } = req.body as EntryValues
  const userId = req.user?.id || `publicUser-${sessionToken}`

  const entry = await createEntry(userId, surveyId, req.body)

  return res.status(201).send(entry)
})

export default entryRouter
