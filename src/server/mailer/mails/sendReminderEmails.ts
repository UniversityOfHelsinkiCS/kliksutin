/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entry, User } from '../../db/models'

import logger from '../../util/logger'
import { getCourse } from '../../util/importer'

import { Course } from '../../types'

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

  // Email treshold date that is x months before the starting date
  // If date of now is in range of treshold and startDate then the
  // course is upcoming
  const emailTreshold = new Date(startDate)
  emailTreshold.setMonth(emailTreshold.getMonth() - XMonths)

  return now >= emailTreshold && now <= startDate
}

interface UpcomingReminderData extends Entry {
  courseData: Course
}

// Find and combine the courses and entries if the course starts in x months
const upcomingReminderData = (entries: Entry[]) =>
  Promise.all(
    entries.map(async (entry) => {
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
        return entry as UpcomingReminderData
      }

      return null
    })
  )

const sendReminderEmails = async (surveyId: number) => {
  // Find all the entries where reminder email is not sent already
  const newEntries = await Entry.findAll({
    include: User,
    where: {
      surveyId,
      reminderSent: false,
    },
  })

  const entries = await upcomingReminderData(newEntries)

  const entriesToRemind = entries.filter((entry) => entry !== null)

  const emails = entriesToRemind.map((entry) => {
    const email = {
      to: '',
      subject: `Curre reminder for ${entry?.courseData.name.en}`,
      text: 'This is a reminder email',
    }

    return email
  })
}

export default sendReminderEmails
