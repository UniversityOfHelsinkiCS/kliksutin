import { Entry, Survey, User } from '../db/models'

import { EntryValues } from '../types'

import NotFoundError from '../errors/NotFoundError'
import UnauthorizedError from '../errors/UnauthorizedError'

import logger from '../util/logger'

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
  const entry = await Entry.findByPk(entryId, { include: Survey })

  if (!entry) throw new NotFoundError('Entry not found')

  const user = await User.findByPk(userId)

  if (entry.userId !== userId && !user?.isAdmin)
    throw new UnauthorizedError('Unauthorized access')

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

    const entry = existingEntry?.toJSON()
    logger.info('Existing entry found. Updated entry: ', {
      ...entry,
      isExisting: true,
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

  const entry = newEntry?.toJSON()
  logger.info('Existing entry not found. Created new entry: ', {
    ...entry,
    isExisting: false,
  })

  return newEntry
}
