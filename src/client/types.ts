import {
  Control,
  UseFormWatch,
  FieldValues,
  UseFormRegister,
  SubmitHandler,
} from 'react-hook-form'

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

export interface SingleChoiceType {
  id: string
  label: Locales
}

export interface MultipleChoiceType {
  id: string
  label: Locales
  data: Locales
}

export interface OptionData {
  options: SingleChoiceType[] | MultipleChoiceType[]
  type: string
}

export type Visibility = {
  options: string[]
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

export interface DimensionData {
  id: number
  label: string
  title: Locales
  text: Locales
  dimensions?: string[]
}

export interface FormValues {
  [key: string]: string | [key: boolean]
  faculty: string
}

export interface Result {
  id: number
  surveyId: number
  optionLabel: string
  isSelected: string
  createdAt: Date
  updatedAt: Date
  data: {
    [key: string]: Locales
  }
}

export interface Faculty {
  code: string
  name: Locales
}
