import { User } from '@backend/types'

const getEfecteEmailString = (
  user: User | undefined,
  faculty: string | undefined,
  courseId: string | undefined,
  content: string | undefined
) =>
  `
  [efecte-sg]SG-00000081[/efecte-sg]
  [efecte-cat1]CAT-00008065[/efecte-cat1]

  [efecte-email1]${user?.email}[efecte-email1]
  [efecte-email2]${user?.email}[efecte-email2]

  [efecte-desc]
  Käyttäjän sähköpostiosoite: ${user?.email}
  Käyttäjän nimi: ${user?.firstName} ${user?.lastName}
  Käyttäjän tiedekunta: ${faculty}

  Kurssin Sisu ID: ${courseId}
  Kurssin Sisu linkki: <a href="https://sisu.helsinki.fi/teacher/role/staff/teaching/course-unit-realisations/view/${courseId}/information/basicinfo">https://sisu.helsinki.fi/teacher/role/staff/teaching/course-unit-realisations/view/${courseId}/information/basicinfo</a>

  Käyttäjän viesti:
  ${content}
  [/efecte-desc]
  `

export default getEfecteEmailString
