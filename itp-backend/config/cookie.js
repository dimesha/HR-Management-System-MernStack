export const cookieConfig = {
  secure: process.env.NODE_ENV === 'production',
  maxAge: 1000 * 60 * 60 * 24, // 1 day
}
