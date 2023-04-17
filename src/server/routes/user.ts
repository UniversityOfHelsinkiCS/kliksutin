import express from 'express'

import { RequestWithUser } from '../types'
import { User } from '../db/models'

const userRouter = express.Router()

userRouter.get('/login', async (req: RequestWithUser, res) => {
  const { user } = req

  if (!user.id) return res.send({})

  const [updatedUser, isNewUser] = await User.upsert({
    ...user,
    lastLoggedIn: new Date(),
  })

  return res.send({ ...updatedUser, isNewUser })
})

export default userRouter
