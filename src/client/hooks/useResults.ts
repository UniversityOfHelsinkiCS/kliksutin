import { useState, useEffect } from 'react'

import apiClient from '../util/apiClient'
import { Result } from '../types'

const useResults = (): Result[] => {
  const [results, setResults] = useState(null)

  useEffect(() => {
    apiClient.get('/results/0').then(({ data }) => setResults(data))
  }, [])

  return results
}

export default useResults
