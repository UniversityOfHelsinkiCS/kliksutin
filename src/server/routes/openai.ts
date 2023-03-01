import express from 'express'

import { inE2EMode } from '../../config'
import { createCompletion } from '../util/openai'

const mockCompletion = 'Openai response'

const openaiRouter = express.Router()

openaiRouter.post('/', async (req, res) => {
  const { prompt } = req.body

  if (!prompt) return res.sendStatus(400)

  if (inE2EMode) return res.send(mockCompletion)

  const { choices } = await createCompletion(prompt)
  const { text } = choices[0]

  return res.send(text)
})

export default openaiRouter
