import mongoose from 'mongoose'

const EmployeeRequest = new mongoose.Schema(
  {
    employeeID: {
      type: String,
      required: true,
      unique: true,
    },
    NameInFull: {
      type: String,
      required: true,
    },
    TrainingInstructorApproval: {
      type: Boolean,
      default: false,
      required: true,
    },
    ApprovalOfQE: {
      type: Boolean,
      default: false,
      required: true,
    },
    Date: {
      type: Date,
      required: true,
    },
    Skills: [
      {
        Skill: String,
        TransferLine: String,
      },
    ],
    Description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const EmployeeRequestModel = mongoose.model('EmployeeRequest', EmployeeRequest)

export default EmployeeRequestModel;
