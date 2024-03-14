import express from 'express'
import tsmsRouter from './trainingSheduleMgt.routes'
import miscRouter from './misc'

import atmRouter from './taskAdminMgt.routes'
import smsRouter from './skillMatrix.routes'
import traineeDiaryMgtRouter from './TraineeDiary.routes'
// EmployeeRequestRoutes from './employee-request.routes'
import activityMgtRouter from './trainingSclActivityMgt.routes'
import inlineProductRoutes from './inlineProduct.routes'

const router = express.Router()

// Add your routes bellow
router.use(miscRouter) // Miscellaneous routes. Ex: Email
router.use('/tsms', tsmsRouter) // Router for Tranining Schedule Management System - Shalinda
router.use('/sms', smsRouter) // Router for Skill Matrix System - Radul
router.use('/atm', atmRouter) // Router for Admin Task Management - Akila
//router.use('/employee-request', EmployeeRequestRoutes)
router.use('/activityMgtSystm',activityMgtRouter)//Router for activity management system - Dimesha
router.use('/ipm', inlineProductRoutes) // Router for Inline Product Management- Supun
router.use('/tds', traineeDiaryMgtRouter)
// Add your routes above

router.use('/', (req, res) =>
  res.json({ data: 'API running successfully' }).status(200)
)
export default router
