import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'

import { Entry } from '../types'

const useEntry = (entryId: number) => {
  const queryKey = ['entry', entryId]

  const query = async (): Promise<Entry> => {
    const { data } = await apiClient.get(`/entries/${entryId}`)

    return data
  }

  const { data: entry, ...rest } = useQuery(queryKey, query)

  return { entry, ...rest }
}

export default useEntry
