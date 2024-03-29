import express from 'express'

import sendEmail from '../mailer/pate'

const summaryRouter = express.Router()

summaryRouter.post('/', async (req, res) => {
  const { targets, text, subject, replyTo } = req.body

  try {
    await sendEmail(targets, text, subject, replyTo)
  } catch (error: any) {
    return res.status(422).json({ error: error.message })
  }
  return res.status(201).end()
})

export default summaryRouter
