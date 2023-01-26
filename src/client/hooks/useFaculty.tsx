import { useState, useEffect } from "react";
import axios from "axios";

function useFaculty () {
	const [faculties, setFaculties] = useState(null)

	useEffect(() => {
    axios
      .get('/api/faculties')
      .then((facultyData) => setFaculties(facultyData.data))
  }, [])

	return faculties
}

export default useFaculty