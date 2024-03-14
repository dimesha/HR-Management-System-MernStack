import Greeting from '../models/Greetings'
import HRSession from '../models/HRSessions'

// Greeting Repo
export const createGreetingRepo = async ({
  name,
  position,
  department,
  message,
}) => {
  const greet = new Greeting({
    name,
    position,
    department,
    message,
  })

  const status = await greet.save()
  return status
}

export const updateSessionRepo = async ({
  greetId,
  name,
  position,
  department,
  message,
}) => {
  const status = await Greeting.updateOne(
    { _id: greetId },
    {
      $set: {
        name,
        position,
        department,
        message,
      },
    }
  ).catch((err) => {
    return 0
  })

  return status
}

export const getGreetingsRepo = async () => {
  const greets = await Greeting.find({})
  return greets
}

export const getGreetingRepo = async ({ greetId }) => {
  const greet = await Greeting.findOne({ _id: greetId })
  return greet
}

export const deleteGreetingRepo = async ({ greetId }) => {
  const status = await Greeting.findByIdAndDelete({
    _id: greetId,
  })

  return status
}
// Greeting Repo End

// Session Repo
export const createSessionRepo = async ({
  sessionName,
  sessionType,
  sessionStartTimestamp,
  sessionEndTimestamp,
  speaker,
}) => {
  const session = new HRSession({
    sessionName,
    sessionType,
    sessionStartTimestamp,
    sessionEndTimestamp,
    speaker,
  })

  const status = await session.save()
  return status
}
// Session Repo End
