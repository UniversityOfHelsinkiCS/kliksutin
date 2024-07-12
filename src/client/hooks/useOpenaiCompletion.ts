import { useQuery } from '@tanstack/react-query'
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import apiClient from '../util/apiClient'

const useOpenAiCompletion = (prompt: string, key: string) => {
  const { t } = useTranslation()
  const queryKey = ['completion', key]

  const queryFn = async (): Promise<string> => {
    const { data } = await apiClient.post('/openai', {
      prompt,
    })

    return data
  }

  const { data: completion, ...rest } = useQuery({
    queryKey,
    queryFn,
  })

  const completionMessage = completion
    ? `${prompt}\n\n${completion}`
    : t('openai:apiErrorMessage')

  if (completion) {
    sessionStorage.setItem(`curre-openAI-${key}`, completionMessage)
  }

  return { completion: completionMessage, ...rest }
}

export default useOpenAiCompletion
