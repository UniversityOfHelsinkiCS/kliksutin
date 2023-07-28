/* eslint-disable @typescript-eslint/no-unused-vars */
import logger from '../util/logger'
import scheduleCronJob from '../util/cron'

import { inProduction, inStaging, inDevelopment } from '../../config'
import sendReminderEmails from './mails/sendReminderEmails'

const runReminderEmailCron = async () => {
  logger.info('Reminder email cron job is running')

  /* const surveyId = 1 // kliksutin surveyId
  await sendReminderEmails(surveyId) */
}

const startReminderEmailCron = async () => {
  /* if (!inProduction || inStaging) {
    return logger.info(
      'Reminder email cron job is NOT ran in staging or development environments'
    )
  } */

  if (!inDevelopment) {
    return logger.info(
      'Reminder email cron job is NOT ran in staging or production environments'
    )
  }

  logger.warn(
    'Reminder email cron job IS RAN ONLY in development environment !!!'
  )

  logger.info('Setting up reminder email cron job')

  // const cronSchedule = '12 15 * * SUN' // Every sunday at 12:15

  const cronSchedule = '* * * * *'

  return scheduleCronJob(cronSchedule, runReminderEmailCron)
}

const scheduleMailerCronJobs = async () => {
  await startReminderEmailCron()
}

export default scheduleMailerCronJobs
