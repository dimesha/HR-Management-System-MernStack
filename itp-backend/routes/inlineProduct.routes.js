import express from 'express'

import { validateData } from '../middleware/joiValidate'

import { authorize } from '../middleware/authorize'

const inlineProductRouter = express.Router()
const {
  createEmployeeRequest,
} = require('../controllers/EmployeeRequest.controller')
const schema = require('../validations/EmployeeRequest.validation')

// Imports for QE
import { QEExamSchema } from '../validations/QEExam.validations'
import {
  createExam,
  updateExam,
  deleteExam,
  getExams,
  getExam,
} from '../controllers/QEExam.controller'
// Imports for QE End

inlineProductRouter.post(
  '/create',
  authorize(['industial-engineer']),
  validateData(schema.EmployeeRequestSchema),
  createEmployeeRequest
)

// QE Routes Bellow
inlineProductRouter.post(
  '/exam',
  authorize(['qe-engineer']),
  validateData(QEExamSchema),
  createExam
)

inlineProductRouter.put(
  '/exam/:id',
  authorize(['qe-engineer']),
  validateData(QEExamSchema),
  updateExam
)

inlineProductRouter.delete('/exam/:id', authorize(['qe-engineer']), deleteExam)

inlineProductRouter.get('/exam/', authorize(['qe-engineer']), getExams)

inlineProductRouter.get('/exam/:id', authorize(['qe-engineer']), getExam)
// QE Routes Above

export default inlineProductRouter
