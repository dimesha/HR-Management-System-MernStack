import {
  createGreetingRepo,
  getGreetingsRepo,
  deleteGreetingRepo,
  getGreetingRepo,
  updateSessionRepo,
  createSessionRepo,
} from '../repository/adminTaskMgt.repository'

// Session
export const createSession = async (req, res) => {
  const status = await createSessionRepo({ ...req.body })
  return res.json(status)
}
// Session End

// Greetings
export const createGreet = async (req, res) => {
  const status = await createGreetingRepo({ ...req.body })
  return res.json(status)
}

export const updateGreeting = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Greet ID is required' })
  }

  const greetId = req.params.id
  const greet = await updateSessionRepo({ greetId, ...req.body })
  if (greet == 0 || greet == null) {
    return res.status(404).json({ data: 'Greet not found.' })
  }

  return res.status(200).json(greet)
}

export const getGreetings = async (req, res) => {
  const status = await getGreetingsRepo()
  return res.json(status)
}

export const getGreeting = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Greet ID is required' })
  }

  const greetId = req.params.id
  const greet = await getGreetingRepo({ greetId })
  if (greet == null) {
    return res.status(404).json({ data: 'Greet not found.' })
  }

  return res.status(200).json(greet)
}

export const deleteGreeting = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Greet ID is required' })
  }

  const greetId = req.params.id
  const status = await deleteGreetingRepo({ greetId })
  if (status == null) {
    return res.status(404).json({ data: 'Greet not found.' })
  }

  return res.status(200).json({ data: 'Greet deleted successfully.' })
}
// Greetings End
