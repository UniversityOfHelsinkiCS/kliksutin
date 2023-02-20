import express from 'express'
import cors from 'cors'
import { Handlers as SentryHandlers } from '@sentry/node'

import initializeSentry from '../util/sentry'
import errorHandler from '../middeware/errorHandler'
import facultyRouter from './faculty'
import surveyRouter from './survey'
import recommendationRouter from './recommendation'
import resultRouter from './result'

const router = express()

initializeSentry(router)

router.use(SentryHandlers.requestHandler())
router.use(SentryHandlers.tracingHandler())

router.use(cors())
router.use(express.json())

router.use('/faculties', facultyRouter)
router.use('/surveys', surveyRouter)
router.use('/recommendations', recommendationRouter)
router.use('/results', resultRouter)

router.use(SentryHandlers.errorHandler())
router.use(errorHandler)

export default router
