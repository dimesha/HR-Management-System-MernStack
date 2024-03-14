import { Joi } from 'celebrate'

// Define the validation schema
export const EmployeeRequestSchema = Joi.object({
  employeeID: Joi.string().required(),
  NameInFull: Joi.string().required(),
  TrainingInstructorApproval: Joi.boolean().required(),
  ApprovalOfQE: Joi.boolean().required(),
  Date: Joi.date().required(),
  Skills: Joi.array().items(
    Joi.object({
      Skill: Joi.string().required(),
      TransferLine: Joi.string(),
    })
  ),
  Description: Joi.string().required(),
});

