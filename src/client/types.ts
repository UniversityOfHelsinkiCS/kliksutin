import { Control } from 'react-hook-form'

export interface InputProps {
  control: Control<any>
  watch?: any
  register?: any
  getValues?: any
}

export type FormValues = {
  faculty: string
  courseAttendanceType: string
  courseAttendants: {
    size: ''
    courseIsMooc?: string
  }
  courseCompletionMethod: string
  courseGrading: string
  courseLectures: string
  lectureRecording: string
}

export type Locales = {
  en: string
  fi: string
  sv: string
}

export interface SingleChoice {
  id: string
  label: string
}

export interface MultipleChoice {
  id: string
  label: string
  tools: string[]
}

export interface OptionData {
  options: SingleChoice[] | MultipleChoice[]
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
