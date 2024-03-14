import { Joi } from 'celebrate'

// Greetings Validations
export const greetCreateSchema = Joi.object({
  name: Joi.string().required(),
  position: Joi.string().required(),
  department: Joi.string().required(),
  message: Joi.string().required(),
})

export const greetUpdateSchema = Joi.object({
  name: Joi.string().required(),
  position: Joi.string().required(),
  department: Joi.string().required(),
  message: Joi.string().required(),
})
// Greetings Validations End

// Session Validations
export const HRSessionCreateSchema = Joi.object({
  sessionName: Joi.string().required(),
  sessionType: Joi.string().required(),
  sessionStartTimestamp: Joi.number().required(),
  sessionEndTimestamp: Joi.number().required(),
  speaker: Joi.string().required(),
})
// Session Validations End
