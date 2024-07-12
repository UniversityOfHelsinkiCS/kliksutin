import { useQuery } from '@tanstack/react-query'
import apiClient from '../util/apiClient'

import { Entry } from '../types'

const useEntry = (entryId: string | undefined) => {
  const queryKey = ['entry', entryId]

  const queryFn = async (): Promise<Entry> => {
    const { data } = await apiClient.get(`/entries/${entryId}`)

    return data
  }

  const { data: entry, ...rest } = useQuery({
    queryKey,
    queryFn,
    enabled: !!entryId,
    retry: false,
    throwOnError: true,
  })

  return { entry, ...rest }
}

export default useEntry
