import express from 'express'
import { getOrganisationData } from '../util/jami.js'

const facultyRouter = express.Router()

facultyRouter.get('/', async (req, res) => {
  const faculties = await getOrganisationData()

  return res.json(faculties)
})

export default facultyRouter
