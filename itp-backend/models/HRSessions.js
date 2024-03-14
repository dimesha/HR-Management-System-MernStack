import mongoose from 'mongoose'

// Example modal. Cahnge it according to your needs.
const HRSessionSchema = new mongoose.Schema(
  {
    sessionName: String,
    sessionType: String,
    sessionStartTimestamp: Number,
    sessionEndTimestamp: Number,
    speaker: String,
  },

  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const HRSession = mongoose.model('HRSession', HRSessionSchema)

HRSession.syncIndexes()

export default HRSession
