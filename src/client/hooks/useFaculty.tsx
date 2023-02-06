import { useState, useEffect } from 'react'
import axios from 'axios'

import { BASE_PATH } from '../../config'

function useFaculty() {
  const [faculties, setFaculties] = useState(null)

  useEffect(() => {
    axios
      .get(`${BASE_PATH}api/faculties`)
      .then((facultyData) => setFaculties(facultyData.data))
  }, [])

  return faculties
}

export default useFaculty
