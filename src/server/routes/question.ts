import express from 'express'

import { v4 as uuidv4 } from 'uuid'

import { Question, Survey } from '../db/models'

import { QuestionsUpdates, RequestWithUser } from '../types'

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

    question.changed('optionData', true) // Sequelize things only https://stackoverflow.com/questions/45287514/sequelize-update-nested-property-in-jsonb

    await question.save()

    return res.send(question)
  }
)

questionRouter.post('/:surveyId', async (req: RequestWithUser, res) => {
  const { surveyId } = req.params
  const { isAdmin } = req.user
  const data: Question = req.body

  if (!isAdmin) throw new Error('Unauthorized')

  const survey = await Survey.findByPk(surveyId)
  if (!survey) throw new Error('Survey not found')

  const { options } = data.optionData

  // inject the options with id and label of random uuid
  const injectedOptions = options.map((opt) => {
    const id = uuidv4()
    return {
      id,
      label: id,
      ...opt,
    }
  })

  Object.assign(data.optionData.options, injectedOptions)

  const nextAvailablePriority = async (parentId: number | null) => {
    const result: number = await Question.max('priority', {
      where: { parentId },
    })

    return result + 1
  }

  const question = await Question.create({
    surveyId: Number(surveyId),
    priority: await nextAvailablePriority(data.parentId),
    ...data,
  })

  return res.status(201).send(question)
})

export default questionRouter
