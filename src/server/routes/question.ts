import express from 'express'

import { QuestionsUpdates, RequestWithUser } from '../types'
import { Question } from '../db/models'

const questionRouter = express.Router()

questionRouter.get('/:surveyId', async (req, res) => {
  const { surveyId } = req.params

  const questions = await Question.findAll({
    where: {
      surveyId,
    },
  })

  return res.send(questions)
})

questionRouter.put('/:id', async (req: RequestWithUser, res) => {
  const { id } = req.params
  const { isAdmin } = req.user

  if (!isAdmin) throw new Error('Unauthorized')

  const question = await Question.findByPk(id)

  if (!question) throw new Error('Question not found')

  const updates: QuestionsUpdates = req.body

  Object.assign(question, updates)

  await question.save()

  return res.send(question)
})

questionRouter.put(
  '/:id/option/:optionId',
  async (req: RequestWithUser, res) => {
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

    await question.save()

    return res.send(question)
  }
)

export default questionRouter
