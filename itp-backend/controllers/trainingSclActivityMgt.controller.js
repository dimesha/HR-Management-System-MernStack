import {
    createActivityRepo,
    getActivityRepo,
    getAnActivityRepo,
    updateActivityRepo,
    deleteActivityRepo,
  } from '../repository/activityMgtSystm.activity.repository'
  
  
  // Activity
  export const createActivity = async (req, res) => {
    const status = await createActivityRepo({ ...req.body })
    return res.json(status)
  }
  
  export const updateActivity = async (req, res) => {
    if (req.params.id == undefined || req.params.id == '') {
      return res.status(400).json({ error: 'Activity ID is required' })
    }
  
    const defaultActID = req.params.id
    const activity = await updateActivityRepo({ defaultActID, ...req.body })
    if (activity == 0 || activity == null) {
      return res.status(404).json({ data: 'Activity not found.' })
    }
  
    return res.status(200).json(activity)
  }
  
  export const getAllActivity = async (req, res) => {
    const status = await getActivityRepo()
    return res.json(status)
  }
  
  export const getActivity = async (req, res) => {
    if (req.params.id == undefined || req.params.id == '') {
      return res.status(400).json({ error: 'Activity ID is required' })
    }
  
    const defaultActID = req.params.id
    const activity = await getAnActivityRepo({ defaultActID })
    if (activity == null) {
      return res.status(404).json({ data: 'Activity not found.' })
    }
  
    return res.status(200).json(activity)
  }
  
  export const deleteActivity = async (req, res) => {
    if (req.params.id == undefined || req.params.id == '') {
      return res.status(400).json({ error: 'Activity ID is required' })
    }
  
    const activityId = req.params.id
    const status = await deleteActivityRepo({ activityId })
    if (status == null) {
      return res.status(404).json({ data: 'Activity not found.' })
    }
  
    return res.status(200).json({ data: 'Activity deleted successfully!' })
  }
  // Activity End


