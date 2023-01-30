import { Control } from 'react-hook-form'

export interface InputProps {
  control: Control<any>
  watch?: any
  register?: any
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

export interface SingleChoise {
  id: string
  label: string
}

export interface OptionData {
  options: SingleChoise[]
  type: string
}

export interface Survey {
  id: Number
  name: string
  createdAt: Date
  updatedAt: Date
  Questions: Question[]
}

export interface Question {
  id: Number
  surveyId: Number
  parentId: Number
  priority: Number
  title: Locales
  text: Locales
  optionData: OptionData
  visibility: {}
  createdAt: Date
  updatedAt: Date
}
