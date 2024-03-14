import express from 'express'
import { validateData } from '../middleware/joiValidate'
import { sessionCreateSchema } from '../validations/trainingScheduleManagement.validations'
import {
  createSession,
  deleteSession,
  getSessions,
  updateAttendance,
  updateSession,
} from '../controllers/trainingScheduleMgt.controller'
import { authorize } from '../middleware/authorize'
import { CreateSurvey, getsurveyM } from '../controllers/SkillMatrix.controller'

const SkillMatrixRouter = express.Router()

// Add your Skill Matrix routes bellow
SkillMatrixRouter.post(
  '/survey/create',
  authorize(['admin']),
  validateData(sessionCreateSchema),
  CreateSurvey
)

// traningSheduleMgtRouter.put(
//   '/session/:id',
//   authorize(['admin']),
//   validateData(sessionCreateSchema),
//   updateSession
// )

// traningSheduleMgtRouter.delete(
//   '/session/:id',
//   authorize(['admin']),
//   deleteSession
// )

// traningSheduleMgtRouter.put(
//   '/attendance/:id',
//   authorize(['admin']),
//   updateAttendance
// )

SkillMatrixRouter.get('/survey/', authorize(['admin']), getsurveyM)
// Add your Skill Matrix routes above

export default SkillMatrixRouter
