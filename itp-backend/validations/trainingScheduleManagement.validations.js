import { Joi } from 'celebrate'

export const sessionCreateSchema = Joi.object({
  sessionName: Joi.string().required(),
  sessionOrganizer: Joi.string().email().required(),
  sessionStartTimestamp: Joi.date().timestamp().required(),
  sessionEndTimestamp: Joi.date().timestamp().required(),
  location: Joi.string().valid('Online', 'On Premise').required(),
  participantEmails: Joi.array()
    .items({
      email: Joi.string().email().required(),
      attendance: {
        present: Joi.boolean().required(),
        absent: Joi.boolean().required(),
        late: Joi.boolean().required(),
      },
    })
    .required(),
  sessionDesc: Joi.string().required(),
  sessionMaterials: Joi.string().required(),
})

export const attendanceUpdateSchema = Joi.object({
  participantEmails: {
    email: Joi.string().email().required(),
    attendance: {
      present: Joi.boolean().required(),
      absent: Joi.boolean().required(),
      late: Joi.boolean().required(),
    },
  },
})
