/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  AzureKeyCredential,
  ChatCompletions,
  EventStream,
  OpenAIClient,
} from '@azure/openai'
import mockCompletion from '../mocs/openai'
/* eslint-disable no-restricted-syntax */

import { APIError, AzureOptions, Message } from '../types'

import { inE2EMode, validModels } from '../../config'

import { createCompletion } from '../util/openai'

import { AZURE_API_KEY, AZURE_RESOURCE } from '../util/config'
import OpenAIServiceError from '../errors/OpenAIServiceError'
import logger from '../util/logger'

const endpoint = `https://${AZURE_RESOURCE}.openai.azure.com/`

const client = new OpenAIClient(endpoint, new AzureKeyCredential(AZURE_API_KEY))

const getMockCompletionEvents: () => Promise<
  EventStream<ChatCompletions>
> = async () => {
  const mockStream = new ReadableStream<ChatCompletions>({
    start(controller) {
      for (let i = 0; i < 10; i += 1) {
        controller.enqueue({
          id: String(i),
          created: new Date(),
          promptFilterResults: [],
          choices: [
            {
              delta: {
                content: `This is completion ${i}\n`,
                role: 'system',
                toolCalls: [],
              },
              index: 0,
              finishReason: 'completed',
              logprobs: null,
            },
          ],
        })
      }
      controller.close()
    },
  }) as EventStream<ChatCompletions>

  return mockStream
}

export const getCompletionEvents = async ({
  model,
  messages,
}: AzureOptions) => {
  const deploymentId = validModels.find((m) => m.name === model)?.deployment

  if (!deploymentId) throw new Error(`Invalid model: ${model}`)

  if (deploymentId === 'mock') return getMockCompletionEvents()

  try {
    const events = await client.streamChatCompletions(deploymentId, messages)
    return events
  } catch (error: any) {
    logger.error(error)

    return { error } as any as APIError
  }
}

export async function askLlm(allMessages: Message[]): Promise<Message> {
  const model = 'gpt-3.5-turbo'
  const content = await getCompletionEvents({ model, messages: allMessages }) // Get content directly
  const assistantMessage: Message = {
    role: 'assistant',
    content,
  }

  return assistantMessage
}

export function createUserMessage(input: string): Message {
  const message: Message = {
    role: 'user',
    content: input,
  }

  return message
}

export async function eventStreamToText(
  events: EventStream<ChatCompletions>
): Promise<string> {
  let text = ''

  for await (const event of events) {
    for (const choice of event.choices) {
      const delta = choice.delta?.content
      if (delta !== undefined) {
        text += delta
      }
    }
  }
  return text
}

export async function getLlmAnswer(
  input: string,
  messages: Message[]
): Promise<Message> {
  const userMessage = createUserMessage(input)
  messages.push(userMessage)
  const llmResponse = await askLlm(messages)
  messages.push(llmResponse)
  return llmResponse
}

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

  return message.content || ''
}
