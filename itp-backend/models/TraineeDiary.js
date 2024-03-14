import mongoose from 'mongoose'

// Example modal. Cahnge it according to your needs.
const TraineeDiarySchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    timestamp: Number,
    desc: String,
  },

  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const TraineeDiary = mongoose.model('TraineeDiary', TraineeDiarySchema)

TraineeDiary.syncIndexes()

export default TraineeDiary
