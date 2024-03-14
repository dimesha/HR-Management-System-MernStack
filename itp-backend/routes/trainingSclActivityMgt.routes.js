import express from 'express'
import { validateData } from '../middleware/joiValidate'
import {
  createActivity,
  updateActivity,
  deleteActivity,
  getActivity,
  getAllActivity,
} from '../controllers/trainingSclActivityMgt.controller'
import {
  createActivityValidation,
  updateActivityValidation,
} from '../validations/activityMgtSystm'


const TrainingSclActivityMgrRoutes = express.Router()
// Greeting
TrainingSclActivityMgrRoutes.post(
  '/activity',
  validateData(createActivityValidation),
  createActivity
)
TrainingSclActivityMgrRoutes.put(
  '/activity/:id',
  validateData(updateActivityValidation),
  updateActivity
)
TrainingSclActivityMgrRoutes.get('/activity', getAllActivity)
TrainingSclActivityMgrRoutes.get('/activity/:id', getActivity)
TrainingSclActivityMgrRoutes.delete('/activity/:id',deleteActivity)
// act End


export default TrainingSclActivityMgrRoutes




