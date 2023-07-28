import { Entry } from '../../db/models'

import logger from '../../util/logger'
import { getCourse } from '../../util/importer'

type PositiveInteger<T extends number> = `${T}` extends
  | '0'
  | `-${any}`
  | `${any}.${any}`
  ? never
  : T

const startDateInXMonths = <T extends number>(
  startDate: Date,
  XMonths: PositiveInteger<T>
) => {
  const now = new Date()

  const xMonthsAgo = new Date(startDate)
  xMonthsAgo.setMonth(xMonthsAgo.getMonth() - XMonths)

  return now >= xMonthsAgo && now <= startDate
}

const sendSummaryReminderEmails = async (surveyId: number) => {
  // Find all the entries where reminder email is not sent already
  const newEntries = await Entry.findAll({
    where: {
      surveyId,
      reminderSent: false,
    },
  })

  // Find and combine all the courses that starts in one month with the
  // entries
  const newSummaries = newEntries.filter(async (entry) => {
    const courseId = entry.data.course

    if (!courseId) {
      logger.warn(`Course ID not found in the entry ID: ${entry.id}`)
      return false
    }

    const course = await getCourse(courseId)

    const startDate = course.activityPeriod?.startDate

    if (!startDate) {
      logger.warn(`Course start date not found in the course ID: ${courseId}`)
      return false
    }

    return startDateInXMonths(startDate, 1)
  })

  return newSummaries
}

export default sendSummaryReminderEmails
