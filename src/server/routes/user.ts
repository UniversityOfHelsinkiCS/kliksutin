import express from 'express'

import { RequestWithUser } from '../types'
import { User } from '../db/models'

const userRouter = express.Router()

userRouter.get('/login', async (req: RequestWithUser, res: any) => {
  const { user } = req

  if (!user.id) return res.send({})

  const userFound = await User.findByPk(user.id)

  const [updatedUser] = await User.upsert({
    ...user,
    lastLoggedIn: new Date(),
  })

  return res.send({ ...updatedUser.toJSON(), newUser: !userFound })
})

export default userRouter
