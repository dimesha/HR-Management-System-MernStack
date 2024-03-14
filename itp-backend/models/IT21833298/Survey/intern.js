import mongoose from 'mongoose'

const InternSchema = new mongoose.Schema(
  {
    TraineeID: {
      type: String,
      required: true,
      unique: true
    },
    TraineeName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },

    //skills
    TechnicalProficiency: {
        type: Number,
        required: true,
        unique: true
      },
      ProblemSolving: {
        type: Number,
        required: true,
      },
      CommunicationSkills: {
        type: Number,
        required: true,
      },
      TeamCollaboration: {
        type: Number,
        required: true,
        unique: true
      },
      Adaptability: {
        type: Number,
        required: true,
      },
      TimeManagement: {
        type: Number,
        required: true,
      },
      Creativity: {
        type: Number,
        required: true,
      },
      AttentiontoDetail: {
        type: Number,
        required: true,
      },
  
    
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)
//intern database
const Intern = mongoose.model('SurveyIntern', InternSchema)

Intern.syncIndexes()

//manager database
const Manager = mongoose.model('SurveyManager', InternSchema)
  
Manager.syncIndexes()


export default InternSchema
