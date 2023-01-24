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
