import { Survey } from '../models'

const surveyName = 'testSurvey'

const seedSurveys = async () => {
  await Survey.findOrCreate({
    where: {
      name: surveyName,
    },
    defaults: {
      id: 0,
      name: surveyName,
    },
  })
}

export default seedSurveys
