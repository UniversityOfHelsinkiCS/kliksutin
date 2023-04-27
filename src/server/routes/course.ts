import express from 'express'

import { getCourses } from '../util/importer'
import { RequestWithUser } from '../types'

const courseRouter = express.Router()

courseRouter.get('/', async (req: RequestWithUser, res) => {
  const { id } = req.user

  if (!id) res.send([])

  const courses = (await getCourses(id)) || []

  return res.send(courses)
})

export default courseRouter
