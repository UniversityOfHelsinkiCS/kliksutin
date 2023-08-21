import express from 'express'

import { Question, Result } from '../db/models'
import {
  createQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
  updateQuestionPriority,
} from '../services/question'
import { createOption, deleteOption, updateOption } from '../services/option'

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

questionRouter.delete('/:id', adminHandler, async (req, res) => {
  const { id } = req.params

  const deletedQuestion = await deleteQuestion(id)

  return res.status(204).send(deletedQuestion)
})

questionRouter.post('/:id/option/', adminHandler, async (req, res) => {
  const { id } = req.params

  const updatedQuestion = await createOption(id, req.body)

  return res.send(updatedQuestion)
})

questionRouter.put(
  '/:id/option/:optionId',
  adminHandler,
  async (req: RequestWithUser, res: any) => {
    const { id, optionId } = req.params

    const updatedQuestion = await updateOption(id, optionId, req.body)

    return res.send(updatedQuestion)
  }
)

questionRouter.delete(
  '/:id/option/:optionId',
  adminHandler,
  async (req: RequestWithUser, res: any) => {
    const { id, optionId } = req.params

    const updatedQuestion = await deleteOption(id, optionId)

    return res.send(updatedQuestion)
  }
)

export default questionRouter
