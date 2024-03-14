import TrainingSession from '../models/Sessions'

export const createSessionRepo = async ({
  sessionName,
  sessionOrganizer,
  sessionStartTimestamp,
  sessionEndTimestamp,
  location,
  participantEmails,
  sessionDesc,
  sessionMaterials,
}) => {
  const session = new TrainingSession({
    sessionName: sessionName,
    sessionOrganizer: sessionOrganizer,
    sessionStartTimestamp: sessionStartTimestamp,
    sessionEndTimestamp: sessionEndTimestamp,
    location: location,
    participantEmails: participantEmails,
    sessionDesc: sessionDesc,
    sessionMaterials: sessionMaterials,
  })

  const status = await session.save()
  return status
}

export const updateSessionRepo = async ({
  sessionId,
  sessionName,
  sessionOrganizer,
  sessionDateTime,
  location,
  participantEmails,
  sessionDesc,
}) => {
  try {
    const status = await TrainingSession.findByIdAndUpdate(
      { _id: sessionId },
      {
        $set: {
          sessionName: sessionName,
          sessionOrganizer: sessionOrganizer,
          sessionDateTime: sessionDateTime,
          location: location,
          participantEmails: participantEmails,
          sessionDesc: sessionDesc,
        },
      }
    )

    return status
  } catch (err) {
    return 0
  }
}

export const deleteSessionRepo = async (_id) =>
  TrainingSession.findByIdAndDelete({ _id })

export const getSessionsRepo = async () => TrainingSession.find({})

export const getSessionRepo = async (_id) => TrainingSession.findById(_id)

export const updateAttendanceRepo = async ({
  sessionId,
  email,
  attendance,
}) => {
  try {
    const status = await TrainingSession.findOneAndUpdate(
      { _id: sessionId, 'participantEmails.email': email },
      {
        $set: {
          'participantEmails.$.attendance': attendance,
        },
      },
      { new: true }
    )

    return status
  } catch (err) {
    console.log(err)
    return 0
  }
}

export const getInternSessionsRepo = async (email) =>
  TrainingSession.aggregate([
    {
      $match: {
        'participantEmails.email': email,
      },
    },
  ])

export const getManagerSessionsRepo = async (organizerEmail) =>
  TrainingSession.find({ sessionOrganizer: organizerEmail })
