import { Control } from 'react-hook-form'

export interface InputProps {
  control: Control<FormValues>
  watch?: any
}

export type FormValues = {
  courseAttendanceType?: String
  courseAttendants?: String
  courseCompletionMethod?: String
  courseGrading?: String
  courseLectures?: String
  lectureRecording?: String
  courseIsMooc?: String
}
