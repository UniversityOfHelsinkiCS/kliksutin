import React from 'react'
import { FormValues } from '../../types'

const Results = ({ resultData }: { resultData: FormValues }) => {
  if (!resultData) return null

  return <div>{JSON.stringify(resultData)}</div>
}

export default Results
