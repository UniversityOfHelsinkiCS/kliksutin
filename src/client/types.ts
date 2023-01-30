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

export interface Survey {
  id: number
  name: string
  created_at: Date
  updated_at: Date
  questions: Question[]
}

export interface Question {
  id: number
  survey_id: number
  parent_id: number
  priority: number
  title: {
    en: String
    fi: String
    sv: String
  }
  text: {}
  option_data: {}
  visibility: {}
  created_at: Date
  updated_at: Date
}
