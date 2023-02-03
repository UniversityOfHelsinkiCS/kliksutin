import { Question } from '../models'
import getQuestionData from './data/devQuestionData'

const seedQuestions = async () => {
  const questions: any[] = getQuestionData()

  questions.forEach(async (question) => {
    const { id } = await Question.findOne({
      where: {
        title: question.title,
        surveyId: 0,
      },
      attributes: ['id'],
    })

    await Question.upsert({
      id,
      ...question,
    })
  })
}

export default seedQuestions
