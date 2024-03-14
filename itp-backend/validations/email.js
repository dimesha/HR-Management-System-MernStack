import { Joi } from 'celebrate'

export const emailSchema = Joi.object({
  recipient: Joi.string().email().required(),
  content: Joi.object({
    body: Joi.object({
      contentType: Joi.string().valid('HTML', 'Text').required(),
      content: Joi.string().required(),
    }),
  }),
  from: Joi.string().required(),
  subject: Joi.string().required(),
})
