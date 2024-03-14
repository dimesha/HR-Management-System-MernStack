import Activity from '../models/it21833366/activityMgtSystm/activity'

// Activity Repo
export const createActivityRepo = async ({
    ActivityID,
    ActivityName,
    handType,
    sDate,
    stdTime,
    description,
   
  }) => {
    const activity = new Activity({
        ActivityID,
        ActivityName,
        handType,
        sDate,
        stdTime,
        description,
    })
  
    const status = await activity.save()
    return status
  }
  
  
  export const getActivityRepo = async () => {
    const activity = await Activity.find({})
    return activity
  }
  
  export const getAnActivityRepo = async ({ defaultActID, }) => {
    const activity = await Activity.findOne({ _id: defaultActID })
    return activity
  }

  export const updateActivityRepo = async ({
        defaultActID,
        ActivityID,
        ActivityName,
        handType,
        sDate,
        stdTime,
        description,
  }) => {
    const status = await Activity.updateOne(
      { _id: defaultActID },
      {
        $set: {
            ActivityID,
            ActivityName,
            handType,
            sDate,
            stdTime,
            description,
        },
      }
    ).catch((err) => {
      return 0
    })
  
    return status
  }
  
  
  export const deleteActivityRepo = async (defaultActID) => {
    const status = await Activity.findByIdAndDelete({
      _id: defaultActID,
    })
  
    return status
  }
  // Activity Repo End
  
 
  