import express from 'express'
import { sendEmailAPI } from '../../utils/email'
import { validateData } from '../../middleware/joiValidate'
import { emailSchema } from '../../validations/email'

const emailRouter = express.Router()

// Add your routes bellow
emailRouter.post('/send', validateData(emailSchema), sendEmailAPI)
// Add your routes above

export default emailRouter
