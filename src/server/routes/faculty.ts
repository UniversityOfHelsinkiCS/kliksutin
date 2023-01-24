import express from 'express'
import { getOrganisationData } from '../util/jami.js'
import { OrganisationData } from '../types.js'

const facultyRouter = express.Router()

facultyRouter.get('/', async (req, res) => {
  const organisationData: Array<OrganisationData> = await getOrganisationData()

  const faculties = organisationData.map((faculty) => faculty.name)

  return res.json(faculties)
})

export default facultyRouter
