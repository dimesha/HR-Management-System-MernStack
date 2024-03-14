import { Joi } from 'celebrate'

export const todoSchema = Joi.object({
  title: Joi.string().required(),
  type: Joi.string().required(),
  timestamp: Joi.date().timestamp().required(),
  desc: Joi.string().required(),
})
