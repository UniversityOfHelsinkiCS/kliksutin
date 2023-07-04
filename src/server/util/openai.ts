import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai'

import { OPENAI_API_KEY } from './config'
import logger from './logger'

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
})

export const openai = new OpenAIApi(configuration)

const model = 'gpt-3.5-turbo'

const systemPrompt =
  'You are a helpful course planning assistant for the University of Helsinki. You know Finnish, Swedish and English.'

export const createCompletion = async (prompt: string) => {
  const messages: ChatCompletionRequestMessage[] = [
    {
      role: 'system',
      content: systemPrompt,
    },
    {
      role: 'user',
      content: prompt,
    },
  ]

  try {
    const { data } = await openai.createChatCompletion({
      model,
      messages,
      temperature: 0.5,
      max_tokens: 600,
    })

    logger.info('OpenAI API response', { data })

    return data
  } catch (err: any) {
    if (err.response) {
      logger.error('OpenAI API error', {
        status: err.response.status,
        error: err.response.data,
      })
    } else {
      logger.error('OpenAI API error', { error: err.message })
    }

    return null
  }
}
