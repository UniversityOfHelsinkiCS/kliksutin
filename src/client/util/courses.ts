import { Course, Locales } from '@backend/types'

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

export const getCourseName = (course: Course, language: keyof Locales) => {
  console.log(course)
  const name =
    course.name[language as keyof Locales]?.length >
    course.nameSpecifier[language as keyof Locales]?.length
      ? course?.name
      : course?.nameSpecifier

  return name
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
