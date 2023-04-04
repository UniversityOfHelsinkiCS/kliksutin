import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'

const useOpenAiCompletion = (prompt: string, key: string) => {
  const queryKey = ['completion', key]

  const query = async (): Promise<string> => {
    const { data } = await apiClient.post('/openai', {
      prompt,
    })

    return data
  }

  const { data: completion, ...rest } = useQuery(queryKey, query)

  if (completion) sessionStorage.setItem(`curre_openAI_${key}`, completion)

  return { completion, ...rest }
}

export default useOpenAiCompletion
