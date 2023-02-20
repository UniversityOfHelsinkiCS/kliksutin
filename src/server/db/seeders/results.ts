import { Result } from '../models'
import getResultData from './data/devResultData'

const seedResults = async () => {
  const results: any = getResultData()

  results.forEach(async (result) => {
    await Result.upsert({
      ...result,
    })
  })
}

export default seedResults
