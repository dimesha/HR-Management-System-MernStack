export const validateData = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details })
    }
    next() // If validation passes, move to the next middleware
  }
}
