import mongoose from 'mongoose'

const SummarySheetSchema = new mongoose.Schema(
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

const SummarySheet = mongoose.model('SummarySheet', SummarySheetSchema)

SummarySheet.syncIndexes()
export default SummarySheetSchema