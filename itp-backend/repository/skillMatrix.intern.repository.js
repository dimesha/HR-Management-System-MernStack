import InternSchema from '../models/IT21833298/Survey/intern'

export const createSurveyRepo = async ({
    TraineeID,
    TraineeName,
    Description,
    TechnicalProficiency,
    ProblemSolving,
    CommunicationSkills,
    TeamCollaboration,
    Adaptability,
    TimeManagement,
    Creativity,
    AttentiontoDetail,
       
}) => {
  const survey = new InternSchema({
    TraineeID: TraineeID,
    TraineeName: TraineeName,
    Description: Description,
    TechnicalProficiency: TechnicalProficiency,
    ProblemSolving: ProblemSolving,
    CommunicationSkills: CommunicationSkills,
    TeamCollaboration: TeamCollaboration,
    Adaptability: Adaptability,
    TimeManagement: TimeManagement,
    Creativity: Creativity,
    AttentiontoDetail: AttentiontoDetail,
  })

  const status = await survey.save()
  return status
}

// export const updateSessionRepo = async ({
//   sessionId,
//   sessionName,
//   sessionOrganizer,
//   sessionDateTime,
//   location,
//   participantEmails,
//   sessionDesc,
// }) => {
//   const status = await TrainingSession.findByIdAndUpdate(
//     { _id: sessionId },
//     {
//       $set: {
//         sessionName: sessionName,
//         sessionOrganizer: sessionOrganizer,
//         sessionDateTime: sessionDateTime,
//         location: location,
//         participantEmails: participantEmails,
//         sessionDesc: sessionDesc,
//       },
//     }
//   ).catch((err) => {
//     return 0
//   })

//   return status
// }

// export const deleteSessionRepo = async ({ sessionId }) => {
//   const status = await TrainingSession.findByIdAndDelete({
//     _id: sessionId,
//   })

//   return status
// }

// export const getSessionsRepo = async () => {
//   const sessions = await TrainingSession.find({})
//   return sessions
// }

// export const updateAttendanceRepo = async ({
//   sessionId,
//   email,
//   attendance,
// }) => {
//   const status = await TrainingSession.findOneAndUpdate(
//     { _id: sessionId, 'participantEmails.email': email },
//     {
//       $set: {
//         'participantEmails.$.attendance': attendance,
//       },
//     },
//     { new: true }
//   ).catch((err) => {
//     return 0
//   })

//   return status
// }
