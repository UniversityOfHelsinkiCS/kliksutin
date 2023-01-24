import express from 'express'
import { getOrganisationData } from '../util/jami.js'
import { OrganisationData } from '../types.js'

const facultyRouter = express.Router()

facultyRouter.get('/', async (req, res) => {
  const organisationData: OrganisationData = await getOrganisationData()

  return res.json(organisationData)
})

export default facultyRouter
