import mongoose from 'mongoose'

// Example modal. Cahnge it according to your needs.
const TrainingSessionSchema = new mongoose.Schema(
  {
    sessionName: String,
    sessionOrganizer: String,
    sessionStartTimestamp: Number,
    sessionEndTimestamp: Number,
    location: String,
    participantEmails: Array,
    sessionDesc: String,
    sessionMaterials: String,
  },
  
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const TrainingSession = mongoose.model('TrainingSession', TrainingSessionSchema)

TrainingSession.syncIndexes()

export default TrainingSession
