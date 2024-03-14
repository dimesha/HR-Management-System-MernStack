import mongoose from 'mongoose'

const ActivitySchema = new mongoose.Schema(
    {
          ActivityID: {
            type: String,
            required: true,
            unique: true
          },
          ActivityName: {
            type: String,
            required: true,
          },
          handType: {
            type: String,
            required: true,
          },
          sDate: {
            type: String,
            required: true,
          },
          stdTime: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: false,
          },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const Activity = mongoose.model('Activity', ActivitySchema)

Activity.syncIndexes()
export default Activity