export type Faculty = {
  fi: String
  en: String
  se: String
}

export type Programme = {
  key: String
  name: Faculty
  level: String
  companionFaculties: Array<String>
  international: Boolean
}

export interface OrganisationData {
  code: String
  name: Faculty
  programmes: Array<Programme>
}

export interface TranslatedText {
  fi: string
  sv: string
  en: string
}

export interface User {
  id: string
  username: string
  firsName?: string
  lastName?: string
  email?: string
  language?: string
}
