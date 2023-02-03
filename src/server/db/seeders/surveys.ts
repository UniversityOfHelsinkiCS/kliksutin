import { Survey } from '../models'

const surveyName = 'testSurvey'

const seedSurveys = async () => {
  await Survey.upsert({
    id: 0,
    name: surveyName,
  })
}

export default seedSurveys
