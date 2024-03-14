import {
  createTodoRepo,
  updateTodoRepo,
  deleteTodoRepo,
  getTodosRepo,
  getTodoRepo,
} from '../repository/TraineeDiary.repository'

export const createTodo = async (req, res) => {
  // Create item
  const status = await createTodoRepo({ ...req.body })
  return res.json(status)
}

export const updateTodo = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Todo ID is required' })
  }

  const itemId = req.params.id
  const status = await updateTodoRepo({ itemId, ...req.body })
  if (status == 0) {
    return res.status(404).json({ data: 'Todo not found.' })
  }

  return res.status(200).json({ data: 'Todo updated successfully.' })
}

export const deleteTodo = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Todo ID is required' })
  }

  const itemId = req.params.id
  const status = await deleteTodoRepo(itemId)
  if (status == null) {
    return res.status(404).json({ data: 'Todo not found.' })
  }
  return res.status(200).json({ data: 'Todo removed successfully.' })
}

export const getTodos = async (req, res) => {
  const items = await getTodosRepo()
  return res.status(200).json(items)
}

export const getTodo = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Todo ID is required' })
  }

  const item = await getTodoRepo(req.params.id)
  return res.status(200).json(item)
}
