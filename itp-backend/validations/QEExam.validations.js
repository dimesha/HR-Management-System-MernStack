import { Joi } from 'celebrate'

export const QEExamSchema = Joi.object({
  ExamType: Joi.string().required(),
  InvigilatorEmpID: Joi.string().required(),
  Location: Joi.string().required(),
  StartTimestamp: Joi.date().timestamp().required(),
  EndTimestamp: Joi.date().timestamp().required(),
  Materials: Joi.string().required(),
  Questions: Joi.string().required(),
  participantEmails: Joi.array()
    .items({
      email: Joi.string().email().required(),
      score: Joi.number().required(),
      results: {
        fail: Joi.boolean().required(),
        pass: Joi.boolean().required(),
      },
    })
    .required(),
})
