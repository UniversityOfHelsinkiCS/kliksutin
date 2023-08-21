import { Entry, Survey } from '../db/models'

import { EntryValues } from '../types'

export const getEntries = async (): Promise<Entry[]> => {
  const entries = await Entry.findAll({
    include: Survey,
    order: [['updatedAt', 'DESC']],
  })

  return entries
}

export const getEntry = async (
  entryId: string,
  userId: string
): Promise<Entry> => {
  const entry = await Entry.findByPk(entryId)

  if (!entry) throw new Error('Entry not found')

  if (entry.userId !== userId) throw new Error('Unauthorized')

  return entry
}

export const createEntry = async (
  userId: string,
  surveyId: string,
  body: EntryValues
) => {
  const { sessionToken, data } = body

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

    return existingEntry
  }

  const newEntry = await Entry.create({
    surveyId: Number(surveyId),
    userId,
    data,
    sessionToken,
    reminderSent: false,
  })

  return newEntry
}
