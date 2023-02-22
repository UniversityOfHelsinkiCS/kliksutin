import express from 'express'

import sendEmail from '../mailer/pate'

const summaryRouter = express.Router()

summaryRouter.post('/', async (req, res) => {
  const { targets, text } = req.body

  try {
    await sendEmail(targets, text)
  } catch (error) {
    return res.status(422).json({ error: error.message })
  }
  return res.status(201).end()
})

export default summaryRouter
