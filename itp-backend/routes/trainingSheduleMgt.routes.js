import express from 'express'
import { validateData } from '../middleware/joiValidate'
import { sessionCreateSchema } from '../validations/trainingScheduleManagement.validations'
import {
  createSession,
  deleteSession,
  getInternSessions,
  getManagerSessions,
  getSession,
  getSessions,
  updateAttendance,
  updateSession,
} from '../controllers/trainingScheduleMgt.controller'
import { authorize } from '../middleware/authorize'

const traningSheduleMgtRouter = express.Router()

// Add your Training Schedule Management routes bellow
traningSheduleMgtRouter.post(
  '/session/create',
  authorize(['admin']),
  validateData(sessionCreateSchema),
  createSession
)

traningSheduleMgtRouter.put(
  '/session/:id',
  authorize(['admin']),
  validateData(sessionCreateSchema),
  updateSession
)

traningSheduleMgtRouter.delete(
  '/session/:id',
  authorize(['admin']),
  deleteSession
)

traningSheduleMgtRouter.put(
  '/attendance/:id',
  authorize(['admin', 'manager']),
  updateAttendance
)

traningSheduleMgtRouter.get(
  '/session/manager',
  authorize(['manager']),
  getManagerSessions
)

traningSheduleMgtRouter.get(
  '/session/intern',
  authorize(['intern']),
  getInternSessions
)

traningSheduleMgtRouter.get('/session/', authorize(['admin']), getSessions)

traningSheduleMgtRouter.get(
  '/session/:id',
  authorize(['admin', 'manager', 'intern']),
  getSession
)
// Add your Training Schedule Management routes routes above

export default traningSheduleMgtRouter
