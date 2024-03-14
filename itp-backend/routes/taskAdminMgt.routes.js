import express from 'express'
import { validateData } from '../middleware/joiValidate'
import {
  HRSessionCreateSchema,
  greetCreateSchema,
  greetUpdateSchema,
} from '../validations/adminTaskMgt.validations'
import {
  createGreet,
  getGreetings,
  deleteGreeting,
  getGreeting,
  updateGreeting,
  createSession,
} from '../controllers/TaskAdminMgt.controller'
import { authorize } from '../middleware/authorize'

const AdminTaskRouter = express.Router()

// Greeting
AdminTaskRouter.post(
  '/greetings',
  authorize(['admin']),
  validateData(greetCreateSchema),
  createGreet
)
AdminTaskRouter.put(
  '/greetings/:id',
  authorize(['admin']),
  validateData(greetUpdateSchema),
  updateGreeting
)
AdminTaskRouter.get('/greetings', authorize(['admin']), getGreetings)
AdminTaskRouter.get('/greetings/:id', authorize(['admin']), getGreeting)
AdminTaskRouter.delete('/greetings/:id', authorize(['admin']), deleteGreeting)
// Greetings End

// HR Sessions
AdminTaskRouter.post(
  '/session',
  authorize(['admin']),
  validateData(HRSessionCreateSchema),
  createSession
)
// HR Sessions End

export default AdminTaskRouter
