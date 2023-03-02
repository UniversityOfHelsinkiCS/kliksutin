import { Recommendation } from '../models'
import getRecommendationsData from '../../data/recommendations'

const seedRecommendations = async () => {
  const recommendations: any[] = getRecommendationsData()

  recommendations.forEach(async (recommendation) => {
    await Recommendation.upsert({
      ...recommendation,
    })
  })
}

export default seedRecommendations
