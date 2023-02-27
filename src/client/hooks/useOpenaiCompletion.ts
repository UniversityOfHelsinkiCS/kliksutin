import { useQuery } from 'react-query'
import { CreateCompletionResponse } from 'openai'

import apiClient from '../util/apiClient'

const useOpenAiCompletion = (prompt: string) => {
  const queryKey = 'completion'

  const query = async (): Promise<CreateCompletionResponse> => {
    const { data } = await apiClient.post('/openai', {
      prompt,
    })

    return data
  }

  const { data: completion, ...rest } = useQuery(queryKey, query)

  return { completion, ...rest }
}

export default useOpenAiCompletion
