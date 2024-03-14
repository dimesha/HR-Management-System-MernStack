import {
  createQEExamRepo,
  updateQEExamRepo,
  deleteQEExamRepo,
  getQEExamsRepo,
  getQEExamRepo,
} from '../repository/QEExam.repository'

export const createExam = async (req, res) => {
  // Create item
  const status = await createQEExamRepo({ ...req.body })
  return res.json(status)
}

export const updateExam = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Exam ID is required' })
  }

  const itemId = req.params.id
  const status = await updateQEExamRepo({ _id: itemId, ...req.body })
  if (status == 0) {
    return res.status(404).json({ data: 'Exam not found.' })
  }

  return res.status(200).json({ data: 'Exam updated successfully.' })
}

export const deleteExam = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Exam ID is required' })
  }

  const itemId = req.params.id
  const status = await deleteQEExamRepo(itemId)
  if (status == null) {
    return res.status(404).json({ data: 'Exam not found.' })
  }
  return res.status(200).json({ data: 'Exam removed successfully.' })
}

export const getExams = async (req, res) => {
  const items = await getQEExamsRepo()
  return res.status(200).json(items)
}

export const getExam = async (req, res) => {
  const item = await getQEExamRepo(req.params.id)
  return res.status(200).json(item)
}
