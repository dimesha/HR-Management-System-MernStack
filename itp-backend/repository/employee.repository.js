import Employee from '../models/Employee'

export const findUserByEmailAndRole = async ({ email, role }) => {
  const employee = await Employee.findOne({ email, role })

  return employee
}
