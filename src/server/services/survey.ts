import { UpdatedSurveyInfo, UpdatedSurveyInfoZod } from 'src/validators/survey'
import { Question, Survey } from '../db/models'

const sortByPriority = (a: Question, b: Question) => a.priority - b.priority

export const getSurvey = async (surveyName: string): Promise<Survey> => {
  const survey = await Survey.findOne({
    where: {
      name: surveyName,
    },
    include: {
      model: Question,
    },
  })

  if (!survey) throw new Error('Survey not found')

  survey.Questions = survey.Questions.sort(sortByPriority)

  return survey
}

export const updateSurvey = async (
  surveyName: string,
  updates: UpdatedSurveyInfo
): Promise<Survey> => {
  const survey = await Survey.findOne({
    where: {
      name: surveyName,
    },
    include: {
      model: Question,
    },
  })

  if (!survey) throw new Error('Survey not found')

  const request = UpdatedSurveyInfoZod.safeParse(updates)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  Object.assign(survey, body)

  await survey.save()

  return survey
}
