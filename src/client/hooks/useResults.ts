import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'
import { Result } from '../types'

const useResults = () => {
  const queryKey = 'results'

  const query = async (): Promise<Result[]> => {
    const { data } = await apiClient.get('/results/0')

    return data
  }

  const { data: results, ...rest } = useQuery(queryKey, query)

  return { results, ...rest }
}

export default useResults
