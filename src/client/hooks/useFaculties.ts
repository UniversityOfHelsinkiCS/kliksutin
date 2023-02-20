import { useState, useEffect } from 'react'

import apiClient from '../util/apiClient'

const useFaculties = () => {
  const [faculties, setFaculties] = useState(null)

  useEffect(() => {
    apiClient.get('/faculties').then(({ data }) => setFaculties(data))
  }, [])

  return faculties
}

export default useFaculties
