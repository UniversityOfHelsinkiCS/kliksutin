import express from 'express'

import { inE2EMode } from '../../config'
import { createCompletion } from '../util/openai'

const mockCompletion = {}

const openaiRouter = express.Router()

openaiRouter.post('/', async (req, res) => {
  const { prompt } = req.body

  if (!prompt) return res.sendStatus(400)

  if (inE2EMode) return res.send(mockCompletion)

  const data = await createCompletion(prompt)

  return res.send(data)
})

export default openaiRouter
