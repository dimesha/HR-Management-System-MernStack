import mongoose from 'mongoose'

// Example modal. Cahnge it according to your needs.
const GreetingsSchema = new mongoose.Schema(
  {
    name: String,
    position: String,
    department: String,
    message: String,
  },

  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const Greetings = mongoose.model('Greetings', GreetingsSchema)

Greetings.syncIndexes()

export default Greetings
