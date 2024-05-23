import express from 'express'

import { getLlmAnswer } from '../services/openai'
import { Message } from '../types'

const openaiRouter = express.Router()

openaiRouter.post('/', async (req, res) => {
  const { prompt } = req.body

  if (!prompt) return res.sendStatus(400)

  const messages: Message[] = []

  const llmAnswer = await getLlmAnswer(prompt, messages)
  const { content } = llmAnswer
  return res.status(200).send(content)
})

export default openaiRouter
