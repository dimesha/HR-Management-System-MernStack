import { Joi } from 'celebrate'

export const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
})
