import { cookieConfig } from '../config/cookie'
import { findUserByEmailAndRole } from '../repository/employee.repository'
import { generateJWT } from '../utils/jwt'

export const login = async (req, res) => {
  const employeeData = await findUserByEmailAndRole(req.body)

  // Employee not exist check. Employee password not match check...
  if (
    !employeeData ||
    (employeeData && employeeData.password !== req.body.password)
  ) {
    return res.status(401).json({ data: 'Invalid email or password' })
  }

  if (employeeData.role !== req.body.role) {
    return res.status(401).json({ data: 'Invalid role' })
  }

  // Generate auth token
  const authToken = await generateJWT({
    username: employeeData.username,
    email: employeeData.email,
    role: employeeData.role,
  })

  // Append auth cookie
  res.cookie('auth', authToken, cookieConfig)
  return res.status(200).json({ data: 'Logged in successfully.' })
}
