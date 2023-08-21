import express from 'express'

import { RequestWithUser } from '../types'

import { getCourse, getUserCourses } from '../services/course'

const courseRouter = express.Router()

courseRouter.get('/teacher', async (req: RequestWithUser, res: any) => {
  const { id } = req.user

  const teacherCourses = await getUserCourses(id)

  return res.send(teacherCourses)
})

courseRouter.get(
  '/course/:courseId',
  async (req: RequestWithUser, res: any) => {
    const { courseId } = req.params

    const course = await getCourse(courseId)

    return res.send(course)
  }
)

export default courseRouter
