import express from 'express'
import emailRouter from './email.routes'
import authRouter from './auth.routes'

const miscRouter = express.Router()

// Add your misc routes bellow
miscRouter.use('/email', emailRouter)
miscRouter.use('/login', authRouter)
// Add your misc routes above

export default miscRouter
