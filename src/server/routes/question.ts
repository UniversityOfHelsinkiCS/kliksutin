import express from 'express'

import { v4 as uuidv4 } from 'uuid'

import { Question, Result } from '../db/models'
import {
  createQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
  updateQuestionPriority,
} from '../services/question'

import { RequestWithUser } from '../types'
import adminHandler from '../middleware/admin'

const questionRouter = express.Router()

questionRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  const questions = await getQuestions(surveyId)

  return res.status(200).send(questions)
})

questionRouter.post('/:surveyId', adminHandler, async (req, res) => {
  const { surveyId } = req.params

  const newQuestion = await createQuestion(surveyId, req.body)

  return res.status(201).send(newQuestion)
})

questionRouter.put('/:id', adminHandler, async (req, res) => {
  const { id } = req.params

  const updatedQuestion = await updateQuestion(id, req.body)

  return res.status(200).send(updatedQuestion)
})

questionRouter.put('/:id/location', adminHandler, async (req, res) => {
  const { id } = req.params

  const updatedQuestion = await updateQuestionPriority(id, req.body)

  return res.status(200).send(updatedQuestion)
})

questionRouter.delete(
  '/:id',
  adminHandler,
  async (req: RequestWithUser, res: any) => {
    const { id } = req.params

    const deletedQuestion = await deleteQuestion(id)

    return res.status(204).send(deletedQuestion)
  }
)

questionRouter.post('/:id/option/', async (req: RequestWithUser, res: any) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const question = await Question.findByPk(id)

  if (!question) throw new Error('Question not found')

  const optionId = uuidv4()
  const newOption = {
    ...req.body,
    id: optionId,
    label: optionId,
  }

  question.optionData.options = [...question.optionData.options, newOption]

  question.changed('optionData', true)

  await question.save()

  return res.send(question)
})

questionRouter.put(
  '/:id/option/:optionId',
  async (req: RequestWithUser, res: any) => {
    const { id, optionId } = req.params
    const { isAdmin } = req.user

    if (!isAdmin) throw new Error('Unauthorized')

    const question = await Question.findByPk(id)

    if (!question) throw new Error('Question not found')

    const option = question.optionData.options.find(
      (aOption) => aOption.id === optionId
    )

    if (!option) throw new Error('Option not found')

    const updates = question.optionData.options.map((aOption) =>
      aOption.id === optionId ? Object.assign(option, req.body) : aOption
    )

    Object.assign(question, updates)

    question.changed('optionData', true)

    await question.save()

    return res.send(question)
  }
)

questionRouter.delete(
  '/:id/option/:optionId',
  async (req: RequestWithUser, res: any) => {
    const { id, optionId } = req.params
    const { isAdmin } = req.user

    if (!isAdmin) throw new Error('Unauthorized')

    const question = await Question.findByPk(id)

    if (!question) throw new Error('Question not found')

    const option = question.optionData.options.find(
      (aOption) => aOption.id === optionId
    )

    if (!option) throw new Error('Option not found')

    const updates = question.optionData.options.filter(
      (aOption) => aOption.id !== optionId
    )

    question.optionData.options = updates

    question.changed('optionData', true)

    await question.save()

    await Result.destroy({
      where: {
        optionLabel: option.label,
      },
    })

    return res.send(question)
  }
)

export default questionRouter
