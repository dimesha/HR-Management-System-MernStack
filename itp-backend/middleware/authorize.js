import { decodedJWT } from '../utils/jwt'

export const authorize = (roles) => {
  return (req, res, next) => {
    // Check cookie for auth. Check role
    if (!req.cookies.auth)
      return res.json({
        data: `You are not authorized to do this action. Please login as '${roles}'.`,
      })

    // Check role
    const decodedToken = decodedJWT(req.cookies.auth)
    if (!decodedToken)
      return res.json({
        data: `Token integrity is violated. You are not authorized to do this action. Please login as '${roles}'.`,
      })

    // Check role
    if (!roles.includes(decodedToken.role)) {
      return res.json({
        data: `You are not authorized to do this action. Please login as '${roles}'.`,
      })
    }

    res.locals.email = decodedToken.email

    next()
  }
}
