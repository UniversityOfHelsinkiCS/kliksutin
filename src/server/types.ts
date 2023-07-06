import { Request } from 'express'

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
  international: Boolean
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
  recommendationLabel: string
  subtools: Subtool[]
}

export interface DimensionSelectionData {
  id: string
  label: string
  color: string
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
  parentId: number | null
  priority: number
  title: Locales
  text: Locales
  optionData: OptionData
  visibility: Visibility
}
