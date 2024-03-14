import mongoose from 'mongoose'

const MemberSchema = new mongoose.Schema(
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
          Description: {
            type: String,
            required: true,
          },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const Member = mongoose.model('Activity', MemberSchema)

Member.syncIndexes()
export default MemberSchema