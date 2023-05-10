import { Request } from 'express'

export type Faculty = {
  fi: String
  en: String
  se: String
}

export type Locales = {
  fi: String
  en: String
  sv: String
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
  isAdmin: boolean
  iamGroups: string[]
}

export interface RequestWithUser extends Request {
  user: User
}

export interface ResultUpdates {
  data?: Object
  isSelected?: string
}

export interface Recommendation {
  id: number
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
  data: {
    allDimensions: Locales
    investication: Locales
    production: Locales
    collaboration: Locales
    discussion: Locales
    acquisition: Locales
    practice: Locales
  }
}

export type SingleChoiceType = {
  id: string
  label: string
  title: Locales
}

export interface MultipleChoiceType extends SingleChoiceType {
  data: Locales
}

export type Visibility = {
  options?: string[]
}

export interface Subtool {
  label: string
  title: Locales
  visibility: Visibility
}

export interface ToolType {
  label: string
  subtools: Subtool[]
}

export interface DimensionSelectionData {
  id: string
  label: string
  title: Locales
  text: Locales
  data: ToolType[]
}

export type ChoiceType =
  | SingleChoiceType[]
  | MultipleChoiceType[]
  | DimensionSelectionData[]

export interface OptionData {
  type: string
  options: ChoiceType
}

export interface Question {
  id: number
  surveyId: number
  parentId: number
  priority: number
  title: Locales
  text: Locales
  optionData: OptionData
  visibility: Visibility
}
