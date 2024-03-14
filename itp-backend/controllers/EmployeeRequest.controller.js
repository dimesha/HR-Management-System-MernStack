
const {
  saveEmployeeRequest,
} = require('../repository/EmployeeRequest.repository')

module.exports.createEmployeeRequest = async (req, res) => {
  try {
    const saveResult = await saveEmployeeRequest(req.body)
    res.status(200).send(saveResult)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
