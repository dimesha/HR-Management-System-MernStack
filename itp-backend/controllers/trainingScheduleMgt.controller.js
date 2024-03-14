import {
  createSessionRepo,
  deleteSessionRepo,
  getInternSessionsRepo,
  getManagerSessionsRepo,
  getSessionRepo,
  getSessionsRepo,
  updateAttendanceRepo,
  updateSessionRepo,
} from '../repository/trainingScheduleManagement.repository'
import { sendEmail } from '../utils/email'

export const createSession = async (req, res) => {
  // Create session
  const status = await createSessionRepo({ ...req.body })
  const sessionDateTime = new Date(req.body.sessionDateTime)

  // Send emails
  for (const participant of req.body.participantEmails) {
    await sendEmail({
      from: 'No Reply <sliitproj@gmail.com>',
      recipient: participant.email,
      subject: 'New Session',
      greeting: 'Hello User',
      emailBody: `You have been invited to "${
        req.body.sessionName
      }" session which will be held on ${sessionDateTime.toLocaleDateString(
        'en-US'
      )} at ${sessionDateTime.getHours()}:${sessionDateTime.getMinutes()}. Hope to see you there!`,
    })
  }

  return res.json(status)
}

export const updateSession = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Session ID is required' })
  }

  const sessionId = req.params.id
  const status = await updateSessionRepo({ sessionId, ...req.body })
  if (status == 0) {
    return res.status(404).json({ data: 'Session not found.' })
  }

  const sessionDateTime = new Date(req.body.sessionStartTimestamp)

  // Send emails
  for (const participant of req.body.participantEmails) {
    await sendEmail({
      from: 'No Reply <sliitproj@gmail.com>',
      recipient: participant.email,
      subject: 'Session Updated',
      greeting: 'Hello User',
      emailBody: `Your session "${
        req.body.sessionName
      }" have been updated successfully. Which will be held on ${sessionDateTime.toLocaleDateString(
        'en-US'
      )} at ${sessionDateTime.getHours()}:${sessionDateTime.getMinutes()}. Hope to see you there!`,
    })
  }

  return res.status(200).json({ data: 'Session updated successfully.' })
}

export const deleteSession = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Session ID is required' })
  }

  const sessionId = req.params.id
  const status = await deleteSessionRepo(sessionId)
  if (status == null) {
    return res.status(404).json({ data: 'Session not found.' })
  }

  // Send emails
  for (const participant of status.participantEmails) {
    await sendEmail({
      from: 'No Reply <sliitproj@gmail.com>',
      recipient: participant.email,
      subject: 'Session Cancelled',
      greeting: 'Hello User',
      emailBody: `Your session "${status.sessionName}" have been canceled by the admin.`,
    })
  }
  return res.status(200).json({ data: 'Session canceled successfully.' })
}

export const getSessions = async (req, res) => {
  const sessions = await getSessionsRepo()
  return res.status(200).json(sessions)
}

export const getSession = async (req, res) => {
  const session = await getSessionRepo(req.params.id)
  return res.status(200).json(session)
}

export const updateAttendance = async (req, res) => {
  if (req.params.id == undefined || req.params.id == '') {
    return res.status(400).json({ error: 'Session ID is required' })
  }

  const sessionId = req.params.id
  const status = await updateAttendanceRepo({ sessionId, ...req.body })
  if (!status) {
    return res.status(404).json({ data: 'Session not found.' })
  }

  return res.status(200).json({ data: 'Session updated successfully.' })
}

export const getInternSessions = async (req, res) => {
  const sessions = await getInternSessionsRepo(req.body.email)
  return res.status(200).json(sessions)
}

export const getManagerSessions = async (req, res) => {
  const sessions = await getManagerSessionsRepo(res.locals.email)
  return res.status(200).json(sessions)
}
