import { useState, useEffect } from 'react'

import apiClient from '../util/apiClient'

const useResults = () => {
  const [results, setResults] = useState(null)

  useEffect(() => {
    apiClient.get('/results/0').then(({ data }) => setResults(data))
  }, [])

  return results
}

export default useResults
