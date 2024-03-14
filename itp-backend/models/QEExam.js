import mongoose from 'mongoose'

// Example modal. Cahnge it according to your needs.
const QEExamSchema = new mongoose.Schema(
  {
    ExamType: String,
    InvigilatorEmpID: String,
    Location: String,
    StartTimestamp: Number,
    EndTimestamp: Number,
    Materials: String,
    Questions: String,
    participantEmails: Array,
  },

  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const QEExam = mongoose.model('QEExam', QEExamSchema)

QEExam.syncIndexes()

export default QEExam
