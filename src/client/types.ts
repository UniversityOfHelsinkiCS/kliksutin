import {
  Control,
  UseFormWatch,
  FieldValues,
  UseFormRegister,
  SubmitHandler,
} from 'react-hook-form'

export interface Faculty {
  code: string
  name: Locales
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

export interface InputProps {
  control?: Control<FieldValues>
  watch?: UseFormWatch<FieldValues>
  register?: UseFormRegister<FieldValues>
  question?: Question
  children?: React.ReactNode
  language?: string
  questions?: Question[]
  handleSubmit?: SubmitHandler<FieldValues>
}

export interface FormValues {
  [key: number]: Record<string, { [key: string]: boolean }>
  faculty: string
}

export interface PersistForm {
  value: FormValues
  sessionStorageKey: string
}

export type Locales = {
  en: string
  fi: string
  sv: string
}

export interface InfoType {
  id: string
  title?: Locales
  label: Locales
}

export type SingleChoiceType = {
  id: string
  label: Locales
}

export interface MultipleChoiceType extends SingleChoiceType {
  data: Locales
}

export type ChoiceType =
  | SingleChoiceType[]
  | MultipleChoiceType[]
  | DimensionSelectionData[]

export interface OptionData {
  type: string
  options: ChoiceType
}

export type Visibility = {
  options: string[]
}

export interface Subtool {
  label: string
  title: Locales
  visibility: Visibility
}

export interface ToolType {
  name: string
  subtools: Subtool[]
}

export interface DimensionSelectionData {
  id: string
  label: Locales
  text: Locales
  data: ToolType[]
}

export interface MergedRecommendationDataType {
  subtools: string[]
  name: string
  dimensions: string[]
  id: number
  label: string
  title: Locales
  text: Locales
}

export interface RecommendationData {
  id: number
  label: string
  title: Locales
  text: Locales
  dimensions?: string[]
}

export interface SelectedToolsType {
  mergedRecommendationData: MergedRecommendationDataType[]
  dimensionSelections?: DimensionSelectionData[]
}

export interface Survey {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  Questions: Question[]
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
  createdAt: Date
  updatedAt: Date
}

export interface Result {
  id: number
  surveyId: number
  optionLabel: string
  isSelected: Locales
  createdAt: Date
  updatedAt: Date
  data: {
    [key: string]: Locales
  }
}
