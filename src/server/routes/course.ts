import express from 'express'

import { getCourseData } from '../util/importer'
import { RequestWithUser } from '../types'

const courseRouter = express.Router()

courseRouter.get('/', async (req: RequestWithUser, res) => {
  const { id } = req.user

  const courseData = await getCourseData(id)

  return res.send(courseData)
})

export default courseRouter
