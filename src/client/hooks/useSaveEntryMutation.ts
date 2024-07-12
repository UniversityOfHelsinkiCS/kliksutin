import { v4 as uuidv4 } from 'uuid'
import { useMutation } from '@tanstack/react-query'

import { FormValues } from '@backend/types'

import apiClient from '../util/apiClient'

import { SESSION_TOKEN } from '../../config'

const useSaveEntryMutation = (surveyId: number | undefined) => {
  const mutationFn = async (data: FormValues) => {
    let sessionToken = sessionStorage.getItem(SESSION_TOKEN)

    if (!sessionToken) {
      const sessionId = uuidv4()
      sessionStorage.setItem(SESSION_TOKEN, sessionId)
      sessionToken = sessionId
    }

    await apiClient.post(`/entries/${surveyId}`, {
      data,
      sessionToken,
    })
  }

  const mutation = useMutation({ mutationFn })

  return mutation
}

export default useSaveEntryMutation
