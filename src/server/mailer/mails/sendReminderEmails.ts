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

  const inXMonths = new Date(startDate)
  inXMonths.setMonth(inXMonths.getMonth() - XMonths)

  return now >= inXMonths && now <= startDate
}

const sendReminderEmails = async (surveyId: number) => {
  // Find all the entries where reminder email is not sent already
  const newEntries = await Entry.findAll({
    where: {
      surveyId,
      reminderSent: false,
    },
  })

  // Find and combine all the courses that starts in one month with the
  // entries
  const newSummaries = await Promise.all(
    newEntries.map(async (entry) => {
      const courseId = entry.data.course

      if (!courseId) {
        logger.warn(`Course ID not found in the entry ID: ${entry.id}`)
        return null
      }

      const course = await getCourse(courseId)

      const startDate = course.activityPeriod?.startDate

      if (!startDate) {
        logger.warn(`Course start date not found in the course ID: ${courseId}`)
        return null
      }

      if (startDateInXMonths(startDate, 1)) {
        // Clone the entry object and add the course property to it
        Object.assign(entry, { courseData: course })
        return entry
      }

      return null
    })
  )

  console.log(newSummaries)
}

export default sendReminderEmails
