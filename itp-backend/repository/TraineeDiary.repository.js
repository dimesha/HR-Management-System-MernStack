import TraineeDiary from '../models/TraineeDiary'

export const createTodoRepo = async ({ title, type, timestamp, desc }) => {
  const session = new TraineeDiary({
    title,
    type,
    timestamp,
    desc,
  })

  const status = await session.save()
  return status
}

export const updateTodoRepo = async ({
  itemId,
  title,
  type,
  timestamp,
  desc,
}) => {
  const status = await TraineeDiary.findByIdAndUpdate(
    { _id: itemId },
    {
      $set: {
        title,
        type,
        timestamp,
        desc,
      },
    }
  ).catch((err) => {
    return 0
  })

  return status
}

export const deleteTodoRepo = async (itemId) => {
  const status = await TraineeDiary.findByIdAndDelete({
    _id: itemId,
  })

  return status
}

export const getTodosRepo = async () => {
  const sessions = await TraineeDiary.find({})
  return sessions
}

export const getTodoRepo = async (_id) => TraineeDiary.findById(_id)
