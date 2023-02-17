import { Result } from '../models'
import getResultData from './data/devResultData'

const seedResults = async () => {
  const results: any = getResultData()
  const labels = Object.keys(results)

  labels.map(async (optionLabel) => {
    await Result.upsert({
      optionLabel,
      ...results[optionLabel],
    })
  })
}

export default seedResults
