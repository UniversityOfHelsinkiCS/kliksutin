/* eslint-disable import/no-extraneous-dependencies */
import cron, { TaskContext } from 'node-cron'

const scheduleCronJob = (
  cronExpression: string,
  job: (context: TaskContext) => void
) => {
  cron.schedule(cronExpression, job, {
    timezone: 'Europe/Helsinki',
  })
}

export default scheduleCronJob
