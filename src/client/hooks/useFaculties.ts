import { useState, useEffect } from 'react'
import axios from 'axios'

import { PUBLIC_URL } from '../../config'

const useFaculties = () => {
  const [faculties, setFaculties] = useState(null)

  useEffect(() => {
    axios
      .get(`${PUBLIC_URL}/api/faculties`)
      .then(({ data }) => setFaculties(data))
  }, [])

  return faculties
}

export default useFaculties
