import express from 'express'

import {
  createQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
  updateQuestionPriority,
} from '../services/question'
import {
  createDimension,
  createOption,
  deleteOption,
  updateDimension,
  updateOption,
} from '../services/option'

import adminHandler from '../middleware/admin'
import { RequestWithUser } from '../types'

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

questionRouter.delete('/:id', adminHandler, async (req, res) => {
  const { id } = req.params

  const deletedQuestion = await deleteQuestion(id)

  return res.status(204).send(deletedQuestion)
})

questionRouter.post('/:id/option/', adminHandler, async (req, res) => {
  const { id } = req.params

  const updatedQuestion = await createOption(id, req.body)

  return res.status(201).send(updatedQuestion)
})

questionRouter.post('/:id/dimension/', adminHandler, async (req, res) => {
  const { id } = req.params

  const updatedQuestion = await createDimension(id, req.body)

  return res.status(201).send(updatedQuestion)
})

questionRouter.put(
  '/:id/option/:optionId',
  adminHandler,
  async (req: RequestWithUser, res: any) => {
    const { id, optionId } = req.params

    const updatedQuestion = await updateOption(id, optionId, req.body)

    return res.status(200).send(updatedQuestion)
  }
)

questionRouter.put(
  '/:id/dimension/:dimensionId',
  adminHandler,
  async (req: RequestWithUser, res: any) => {
    const { id, dimensionId } = req.params

    const updatedQuestion = await updateDimension(id, dimensionId, req.body)

    return res.status(200).send(updatedQuestion)
  }
)

questionRouter.delete(
  '/:id/option/:optionId',
  adminHandler,
  async (req: RequestWithUser, res: any) => {
    const { id, optionId } = req.params

    const updatedQuestion = await deleteOption(id, optionId)

    return res.status(204).send(updatedQuestion)
  }
)

export default questionRouter
