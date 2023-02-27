import { Configuration, OpenAIApi } from 'openai'

import { OPENAI_API_KEY } from './config'
import logger from './logger'

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
})

export const openai = new OpenAIApi(configuration)

export const createCompletion = async (prompt: string) => {
  try {
    const { data } = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0,
      max_tokens: 7,
    })

    return data
  } catch (err) {
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
