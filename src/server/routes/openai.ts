import express from 'express'

import { inE2EMode } from '../../config'
import { createCompletion } from '../util/openai'

const mockCompletion = 'Openai response'

const openaiRouter = express.Router()

openaiRouter.post('/', async (req, res) => {
  const { prompt } = req.body

  if (!prompt) return res.sendStatus(400)

  if (inE2EMode) return res.send(mockCompletion)

  const openAIRes = await createCompletion(prompt)

  if (!openAIRes) throw new Error('Open AI service unavailable')

  const { message } = openAIRes.choices[0]

  return res.send(message.content)
})

export default openaiRouter
