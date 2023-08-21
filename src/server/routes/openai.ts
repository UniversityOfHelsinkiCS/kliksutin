import express from 'express'

import { getOpenAIResponse } from '../services/openai'

const openaiRouter = express.Router()

openaiRouter.post('/', async (req, res) => {
  const { prompt } = req.body

  if (!prompt) return res.sendStatus(400)

  const openAIResponse = await getOpenAIResponse(prompt)

  return res.status(200).send(openAIResponse)
})

export default openaiRouter
