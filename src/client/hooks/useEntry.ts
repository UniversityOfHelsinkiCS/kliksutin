import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'

import { Entry } from '../types'

const useEntry = (entryId: string | undefined) => {
  const queryKey = ['entry', entryId]

  const query = async (): Promise<Entry> => {
    const { data } = await apiClient.get(`/entries/${entryId}`)

    return data
  }

  const { data: entry, ...rest } = useQuery(queryKey, query, {
    enabled: !!entryId,
    retry: false,
    useErrorBoundary: true,
  })

  return { entry, ...rest }
}

export default useEntry
