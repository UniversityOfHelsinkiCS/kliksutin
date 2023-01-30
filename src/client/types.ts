import { Control } from 'react-hook-form'

export interface InputProps {
  control: Control<any>
  watch?: any
}

export type FormValues = {
  faculty: String
  courseAttendanceType: String
  courseAttendants: {
    size: ''
    courseIsMooc?: String
  }
  courseCompletionMethod: String
  courseGrading: String
  courseLectures: String
  lectureRecording: String
}

export type Locales = {
  en: String
  fi: String
  sv: String
}

export interface SingleChoise {
  id: String
  label: String
}

export interface OptionData {
  options: SingleChoise[]
  type: String
}

export interface Survey {
  id: Number
  name: String
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
