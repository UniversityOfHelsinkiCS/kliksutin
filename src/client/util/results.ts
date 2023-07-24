/* eslint-disable import/prefer-default-export */

import { FormValues } from '../types'

const resultObjectsToArrays = (resultData: FormValues): string[][] => {
  const objectToArray = (aChoiceId: number): string[] =>
    Object.keys(resultData[aChoiceId]).filter(
      (index) => resultData[aChoiceId][index]
    )

  const entries = Object.entries(resultData)

  return entries.map(([key, value]) => {
    if (typeof value === 'object') {
      const selections = objectToArray(Number(key))

      // Hacky way: if the courseattendance is considered to be hybrid
      // eg. the courseAttendancePresent and courseAttendanceRemote are both selected
      if (
        selections.includes('courseAttendancePresent') &&
        selections.length === 2
      ) {
        return ['courseAttendanceHybrid']
      }
      return objectToArray(Number(key))
    }
    return [value]
  })
}

export const getResultArray = (resultData: FormValues) => {
  const resultArrays = resultObjectsToArrays(resultData)
  return resultArrays
}
