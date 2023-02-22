import { useState, useEffect } from 'react'

import apiClient from '../util/apiClient'
import { Faculty } from '../types'

const useFaculties = (): Faculty[] => {
  const [faculties, setFaculties] = useState(null)

  useEffect(() => {
    apiClient.get('/faculties').then(({ data }) => setFaculties(data))
  }, [])

  return faculties
}

export default useFaculties
