import { Course } from '@backend/types'

export const otherCourse = {
  id: 'OTHER',
  code: '',
  name: {
    fi: 'Muu kurssi',
    sv: 'Annan kurs',
    en: 'Other course',
  },
  nameSpecifier: {
    fi: 'Muu kurssi',
    sv: 'Annan kurs',
    en: 'Other course',
  },
}

export const sortCourses = (courses: Course[]) => {
  const sortedCourses = courses.sort((a, b) => {
    if (
      !a?.courseUnits ||
      !b?.courseUnits ||
      a.courseUnits.length === 0 ||
      b.courseUnits.length === 0
    )
      return -1

    const aCode = a.courseUnits ? a.courseUnits[0]?.code : ''
    const bCode = b.courseUnits ? b.courseUnits[0]?.code : ''
    if (aCode > bCode) return 1
    if (aCode < bCode) return -1

    return 0
  })

  return sortedCourses
}
