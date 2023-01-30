import { Question } from '../models'
import getQuestionData from './data/devQuestionData'

const seedQuestions = async () => {
  const questions: any[] = getQuestionData()

  questions.forEach(async (question) => {
    await Question.findOrCreate({
      where: {
        title: question.title,
        surveyId: 0,
      },
      defaults: {
        ...question,
      },
    })
  })
}

export default seedQuestions
