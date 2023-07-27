import logger from '../util/logger'
import scheduleCronJob from '../util/cron'

import { inProduction, inStaging } from '../../config'

const runReminderEmailCron = async () => {
  logger.info('Reminder email cron job is running')
}

const startReminderEmailCron = async () => {
  if (!inProduction || inStaging) {
    return logger.info(
      'Reminder email cron jon is NOT ran in staging or development environments'
    )
  }

  logger.info('Setting up reminder email cron job')

  const cronSchedule = '12 15 * * SUN' // Every sunday at 12:15

  return scheduleCronJob(cronSchedule, runReminderEmailCron)
}

const scheduleAllCronJobs = async () => {
  await startReminderEmailCron()
}

export default scheduleAllCronJobs
