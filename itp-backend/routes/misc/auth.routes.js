import express from 'express'
import { login } from '../../controllers/auth'
import { validateData } from '../../middleware/joiValidate'
import { authSchema } from '../../validations/auth'

const authRouter = express.Router()

// Add your routes bellow
authRouter.post('/', validateData(authSchema), login)
// Add your routes above

export default authRouter
