import express from 'express'

import { getCourse, getTeacherCourses } from '../util/importer'

import { RequestWithUser } from '../types'
import { inE2EMode } from '../../config'

const courseRouter = express.Router()

const mockCourse = {
  id: 'otm-861c248f-e4e4-43df-a69a-50fd206afabf',
  name: {
    en: 'Open Uni: Full Stack Web Development',
    fi: 'Avoin yo: Full Stack -websovelluskehitys',
    sv: 'Nätundervisning',
  },
  nameSpecifier: {
    en: 'Full Stack Web Development',
    fi: 'Full Stack -websovelluskehitys',
    sv: 'Full Stack -websovelluskehitys',
  },
  assessmentItemIds: ['hy-AI-142971782-open-university-teaching-participation'],
  activityPeriod: {
    endDate: '2024-03-02',
    startDate: '2023-03-15',
  },
  courseUnitRealisationTypeUrn:
    'urn:code:course-unit-realisation-type:teaching-participation-online',
  responsibilityInfos: [
    {
      text: null,
      roleUrn:
        'urn:code:course-unit-realisation-responsibility-info-type:responsible-teacher',
      personId: '',
      validityPeriod: {},
    },
    {
      text: null,
      roleUrn:
        'urn:code:course-unit-realisation-responsibility-info-type:administrative-person',
      personId: '',
      validityPeriod: {},
    },
  ],
  courseUnits: [
    {
      id: 'hy-CU-142971782-2020-08-01',
      code: 'CSM141081',
      responsibilityInfos: [
        {
          text: null,
          roleUrn:
            'urn:code:module-responsibility-info-type:responsible-teacher',
          personId: '',
          validityPeriod: {},
        },
      ],
      name: {
        en: 'Full Stack Web Development',
        fi: 'Full Stack -websovelluskehitys',
        sv: 'Full Stack -websovelluskehitys',
      },
      validityPeriod: {
        startDate: '2020-08-01',
      },
    },
  ],
}

courseRouter.get('/teacher', async (req: RequestWithUser, res: any) => {
  const { id } = req.user

  if (inE2EMode) return res.send([mockCourse])

  if (!id) return res.send([])

  const courses = (await getTeacherCourses(id)) || []

  return res.send(courses)
})

courseRouter.get(
  '/course/:courseId',
  async (req: RequestWithUser, res: any) => {
    const { id } = req.user
    const { courseId } = req.params

    if (inE2EMode) return res.send(mockCourse)

    if (!id || !courseId) return res.send()

    const course = await getCourse(courseId)

    return res.send(course)
  }
)

export default courseRouter
