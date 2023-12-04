import { User } from '@backend/types'

const getEfecteEmailString = (
  user: User | undefined,
  faculty: string | undefined,
  course: string | undefined,
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

  Kurssi: ${course}

  Käyttäjän viesti:
  ${content}
  [/efecte-desc]
  `

export default getEfecteEmailString
