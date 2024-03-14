import express from 'express'
import { validateData } from '../middleware/joiValidate'
import { todoSchema } from '../validations/TraineeDiary.validations'
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from '../controllers/TraineeDiary.controller'
import { authorize } from '../middleware/authorize'

const traineeDiaryMgtRouter = express.Router()

// Add your Training Schedule Management routes bellow
traineeDiaryMgtRouter.post(
  '/todo/create',
  authorize(['intern']),
  validateData(todoSchema),
  createTodo
)

traineeDiaryMgtRouter.put(
  '/todo/:id',
  authorize(['intern']),
  validateData(todoSchema),
  updateTodo
)

traineeDiaryMgtRouter.delete('/todo/:id', authorize(['intern']), deleteTodo)

traineeDiaryMgtRouter.get('/todo/', authorize(['intern']), getTodos)

traineeDiaryMgtRouter.get('/todo/:id', authorize(['intern']), getTodo)
// Add your Training Schedule Management routes routes above

export default traineeDiaryMgtRouter
