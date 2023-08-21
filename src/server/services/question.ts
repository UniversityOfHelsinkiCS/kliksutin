import { Op } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'

import { Question, Survey } from '../db/models'
import {
  NewQuestion,
  NewQuestionZod,
  UpdatedQuestion,
  UpdatedQuestionLocation,
  UpdatedQuestionLocationZod,
  UpdatedQuestionZod,
} from '../../validators/questions'
import { nextAvailablePriority } from '../util/question'
import ZodValidationError from '../errors/ValidationError'

export const getQuestions = async (surveyId: string): Promise<Question[]> => {
  const questions = await Question.findAll({
    where: {
      surveyId,
    },
  })

  return questions
}

export const createQuestion = async (
  surveyId: string,
  newQuestionValues: NewQuestion
): Promise<Question> => {
  const survey = await Survey.findByPk(surveyId)
  if (!survey) throw new Error('Survey not found')

  const request = NewQuestionZod.safeParse(newQuestionValues)

  if (!request.success)
    throw new ZodValidationError(
      'Validation of the new question values failed',
      request.error.issues
    )
  const { data } = request
  const { options } = data.optionData

  // inject the options with id and label of random uuid
  const injectedOptions = options.map((opt) => {
    const id = uuidv4()
    return {
      ...opt,
      id,
      label: id,
    }
  })

  Object.assign(options, injectedOptions)

  // Here the request.data is type of NewQuestion and the injectedOptions have not changed the
  // data, so we have to cast the data as type of Question to get it to play nice
  const question = await Question.create({
    ...(data as Question),
    surveyId: Number(surveyId),
    priority: await nextAvailablePriority(data.parentId),
  })

  return question
}

export const updateQuestion = async (
  questionId: string,
  updatedQuestionValues: UpdatedQuestion
): Promise<Question> => {
  const question = await Question.findByPk(questionId)

  if (!question) throw new Error('Question not found')

  const request = UpdatedQuestionZod.safeParse(updatedQuestionValues)

  if (!request.success) throw new Error('Validation failed')
  const { data } = request

  Object.assign(question, data)

  await question.save()

  return question
}

export const updateQuestionPriority = async (
  questionId: string,
  updatedQuestionValues: UpdatedQuestionLocation
): Promise<Question> => {
  const question = await Question.findByPk(questionId)

  if (!question) throw new Error('Question not found')

  const request = UpdatedQuestionLocationZod.safeParse(updatedQuestionValues)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  if (
    (!body.parentId && !question.parentId) ||
    body.parentId === question.parentId
  ) {
    if (body.priority === question.priority)
      throw new Error('Question position not modified')

    if (body.priority < question.priority) {
      await Question.increment('priority', {
        by: 1,
        where: {
          parentId: body.parentId,
          priority: {
            [Op.between]: [body.priority, question.priority],
          },
        },
      })
    } else {
      await Question.decrement('priority', {
        by: 1,
        where: {
          parentId: body.parentId,
          priority: {
            [Op.between]: [question.priority, body.priority],
          },
        },
      })
    }

    question.update({ priority: body.priority })
  } else {
    await Question.decrement('priority', {
      by: 1,
      where: {
        parentId: question.parentId,
        priority: {
          [Op.gt]: question.priority,
        },
      },
    })

    await Question.increment('priority', {
      by: 1,
      where: {
        parentId: body.parentId,
        priority: {
          [Op.gte]: body.priority,
        },
      },
    })

    question.update({ parentId: body.parentId, priority: body.priority })
  }

  return question
}

export const deleteQuestion = async (questionId: string): Promise<Question> => {
  const question = await Question.findByPk(questionId)

  if (!question) throw new Error('Question not found')

  await question.destroy()

  return question
}
