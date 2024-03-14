import nodemailer from 'nodemailer'
import mailgen from 'mailgen'

let mailGenerator = new mailgen({
  theme: 'default',
  product: {
    name: 'HRDevHub',
    link: 'https://itp-frontend-demo.vercel.app/',
  },
})
  
export const sendEmailAPI = async (req, res) => {
  const config = {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_APP_PWD,
    },
  }

  const transporter = nodemailer.createTransport(config)

  const email = {
    from: req.body.from, // Sender address
    to: req.body.recipient, // Receiver
    subject: req.body.subject, // Subject line
  }

  const emailTemplate = {
    body: {
      name: req.body.content.body.greet,
      intro: req.body.content.body.content,
    },
  }

  email.html = mailGenerator.generate(emailTemplate)

  const info = await transporter.sendMail(email)

  if (info.response.includes('OK')) {
    return res.json({ data: 'Email sent successfully.' }).status(200)
  }

  return res.json({ data: 'Failed to send email.' }).status(500)
}

export const sendEmail = async ({
  from,
  recipient,
  subject,
  greeting,
  emailBody,
}) => {
  const config = {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_APP_PWD,
    },
  }

  const transporter = nodemailer.createTransport(config)

  const email = {
    from: from, // Sender address
    to: recipient, // Receiver
    subject: subject, // Subject line
  }

  const emailTemplate = {
    body: {
      name: greeting,
      intro: emailBody,
    },
  }

  email.html = mailGenerator.generate(emailTemplate)

  const info = await transporter.sendMail(email)

  if (info.response.includes('OK')) {
    return 1
  }

  return 0
}
