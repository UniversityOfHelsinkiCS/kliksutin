import express from 'express'

import { getCourses } from '../util/importer'
import { RequestWithUser } from '../types'
import { inDevelopment } from '../../config'

const courseRouter = express.Router()

courseRouter.get('/', async (req: RequestWithUser, res) => {
  const { id } = inDevelopment ? { id: 'hy-hlo-1441871' } : req.user

  const courses = (await getCourses(id)) || []

  console.log(courses)

  return res.send(courses)
})

export default courseRouter
