import { Op } from 'sequelize'
import { Entry, User } from '../../db/models'

import logger from '../../util/logger'
import { getCourse } from '../../util/importer'

import { EntryWithUser, UpcomingCoursesWithEntries } from '../../types'
import generateReminderEmail from '../templates/reminder'

type PositiveInteger<T extends number> = `${T}` extends
  | '0'
  | `-${any}`
  | `${any}.${any}`
  ? never
  : T

const isStartingInXMonths = <T extends number>(
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

// Find and combine the courses and entries if the course starts in x months
const getUpcomingCoursesWithEntries = (entries: Entry[]) =>
  Promise.all(
    entries.map(async (entry) => {
      const courseId = entry.data.course

      if (!courseId) {
        logger.warn(`Course ID not found for the entry ID: ${entry.id}`)
        return null
      }

      const course = await getCourse(courseId)

      if (!course) {
        logger.warn(`Course not found for the course ID: ${courseId}`)
        return null
      }

      const startDate = course.activityPeriod?.startDate

      if (!startDate) {
        logger.warn(
          `Course start date not found for the course ID: ${courseId}`
        )
        return null
      }

      if (isStartingInXMonths(startDate, 1)) {
        // Clone the entry object and add the course property to it
        const entryWithCourseData = {
          ...entry,
          courseData: course,
        }
        return entryWithCourseData
      }

      return null
    })
  )

const sendReminderEmails = async (surveyId: number) => {
  // Find all the entries where reminder email is not sent already
  const newEntries = (await Entry.findAll({
    include: User,
    where: {
      surveyId,
      [Op.and]: [{ receiveReminder: true }, { reminderSent: false }],
    },
    raw: true,
    nest: true,
  })) as EntryWithUser[]

  const upcoming = await getUpcomingCoursesWithEntries(newEntries)

  const entriesToRemind = upcoming.filter(
    (entry): entry is UpcomingCoursesWithEntries => entry !== null
  )

  const emails = entriesToRemind.map((entry) => {
    const text = generateReminderEmail(entry)

    const email = {
      to: entry.User.email,
      subject: 'Curre reminder',
      text,
    }

    return email
  })

  console.log(`Sending reminder emails for ${emails.length} teachers`)
}

export default sendReminderEmails
