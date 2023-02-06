import { useState, useEffect } from 'react'
import axios from 'axios'

import { PUBLIC_URL } from '../../config'

function useFaculty() {
  const [faculties, setFaculties] = useState(null)

  useEffect(() => {
    axios
      .get(`${PUBLIC_URL}/api/faculties`)
      .then((facultyData) => setFaculties(facultyData.data))
  }, [])

  return faculties
}

export default useFaculty
