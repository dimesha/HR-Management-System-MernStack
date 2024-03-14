import jsonwebtoken from 'jsonwebtoken'

export const generateJWT = async (jsonPayload) => {
  const token = await jsonwebtoken.sign(jsonPayload, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })

  return token
}

export const decodedJWT = (token) => {
  try {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return 0
  }
}
