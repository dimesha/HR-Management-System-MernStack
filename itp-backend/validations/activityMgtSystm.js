import { Joi } from 'celebrate'

// Activity Validations
export const createActivityValidation = Joi.object({
    ActivityID: Joi.string().required(),
    ActivityName: Joi.string().required(),
    handType: Joi.string().required(),
    sDate: Joi.string().required(),
    stdTime: Joi.string().required(),
    description: Joi.string(),

  })
  
  export const updateActivityValidation = Joi.object({
    ActivityName: Joi.string().required(),
    handType: Joi.string().required(),
    sDate: Joi.string().required(),
    stdTime: Joi.string().required(),
    description: Joi.string(),
  })
  // Activity Validations End

  // Member Validations

  // Member Validations End


  // Summary sheet Validations

  // Summary sheet Validations End
