import { Request } from 'express'
import { Entry } from './db/models'

export type Locales = {
  fi: string
  en: string
  sv: string
}

export type Programme = {
  key: string
  name: Locales
  level: string
  companionFaculties: Array<string>
  international: boolean
}

export interface OrganisationData {
  code: string
  name: Locales
  programmes: Array<Programme>
}

export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  language: string
  isAdmin: boolean
  iamGroups: string[]
  newUser?: boolean
}

export interface RequestWithUser extends Request {
  user: User
}

export interface OptionUpdates {
  title: Locales
  data?: Locales
}

export interface Recommendation {
  id?: number
  surveyId: number
  label: string
  type: 'teaching' | 'administration'
  title: Locales
  text: Locales
}

export interface Result {
  id: number
  surveyId: number
  optionLabel: string
  isSelected: Locales
  data: Record<string, Locales>
}

export interface InfoType {
  id: string
  title: Locales
}

export type SingleChoiceType = {
  id: string
  label: string
  title: Locales
}

export interface MultipleChoiceType extends SingleChoiceType {
  data: Locales
}

/** List of question selection id's that controls the visibility of a tool */
export type Visibility = {
  options?: string[]
}

/** Represents a subtool of a tool. Visibility controls when to render a subtool based on a question selection id eg. "isCourseMooc" */
export interface Subtool {
  label: string
  title: Locales
  visibility: Visibility
}

/** Represents a tool that has a common label eg. "moodle" and alse subtools that link to this type of tool. Subtools may be empty and they are rendered based on the visibility field */
export interface ToolType {
  recommendationLabel: string
  subtools: Subtool[]
}

/** Represents the dimension data that has the dimensions common name as id, label and texts are for visible rendering as Locales and data includes tools eg. "moodle" and their respective subtools */
export interface DimensionSelectionData {
  id: string
  label: string
  color: string
  title: Locales
  text: Locales
  data?: ToolType[]
}

export type ChoiceType =
  | SingleChoiceType[]
  | MultipleChoiceType[]
  | DimensionSelectionData[]

export type PossibleChoiceTypes =
  | 'singleChoice'
  | 'multipleChoice'
  | 'dimensions'
  | 'info'

export interface OptionData {
  type: PossibleChoiceTypes
  options: ChoiceType
}
export interface EntryValues {
  data: FormValues
  sessionToken: string
}
export interface FormValues {
  [key: number]: Record<string, { [key: string]: boolean }>
  course: string
  faculty: string
}

export interface Question {
  id: number
  surveyId: number
  parentId: number | null
  priority: number
  title: Locales
  text: Locales
  optionData: OptionData
  visibility: Visibility
}

export interface CourseUnit {
  id: string
  code: string
  responsibilityInfos: {
    text: string | null
    roleUrn: string
    personId: string
    validityPeriod: object
  }[]
  name: Locales
  validityPeriod: {
    startDate: Date
  }
}

export interface Course {
  id: string
  code: string
  name: Locales
  nameSpecifier: Locales
  assessmentItemIds?: string[]
  activityPeriod?: {
    endDate: Date
    startDate: Date
  }
  courseUnitRealisationTypeUrn?: string
  responsibilityInfos?: any[]
  courseUnits?: CourseUnit[]
}

export interface EntryWithUser extends Entry {
  User: User
}

export interface UpcomingCoursesWithEntries extends EntryWithUser {
  courseData: Course
}
