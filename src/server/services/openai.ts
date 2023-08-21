/* eslint-disable import/prefer-default-export */
import mockCompletion from '../mocs/openai'

import { createCompletion } from '../util/openai'
import { inE2EMode } from '../../config'

import OpenAIServiceError from '../errors/OpenAIServiceError'

export const getOpenAIResponse = async (prompt: string): Promise<string> => {
  if (inE2EMode) return mockCompletion

  const openAIRes = await createCompletion(prompt)

  if (!openAIRes)
    throw new OpenAIServiceError(
      'Open AI service unavailable, could not get a response'
    )

  const { message } = openAIRes.choices[0]

  if (!message)
    throw new OpenAIServiceError(
      'Open AI service unavailable, could not get chat completion message'
    )

  return message.content
}
