import { inProduction } from '../../../config'
import logger from '../../util/logger'
import seedSurveys from './surveys'
import seedQuestions from './questions'

const seed = async () => {
  if (inProduction) return

  // eslint-disable-next-line no-promise-executor-return
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 1_000))

  try {
    await seedSurveys()
    await seedQuestions()
  } catch (e) {
    logger.error('Seeding failed: ', e)
  }
}

export default seed
