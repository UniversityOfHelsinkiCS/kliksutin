/* eslint-disable import/prefer-default-export */
import mockCompletion from '../mocs/openai'

import { createCompletion } from '../util/openai'
import { inE2EMode } from '../../config'

export const getOpenAIResponse = async (prompt: string): Promise<string> => {
  if (inE2EMode) return mockCompletion

  const openAIRes = await createCompletion(prompt)

  if (!openAIRes) throw new Error('Open AI service unavailable')

  const { message } = openAIRes.choices[0]

  if (!message) throw new Error('Open AI service unavailable')

  return message.content
}
