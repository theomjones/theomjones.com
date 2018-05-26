const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
})

const allowedOrigins = [
  'http://localhost:8000',
  'https://theomjones.com',
  'https://theomjones.netlify.com',
  'https://theomjon.es',
]

const createHeaders = origin => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
  'Content-Type': 'application/json',
})

const createMailOptions = from => ({
  from,
  to: 'theomjones@gmail.com',
  subject: `You received a message from ${from}.`,
  html: `<p>Message from: ${from}</p>`,
})

exports.handler = (event, ctx, callback) => {
  // Grab origin
  const requestOrigin = event.headers.origin
  let origin

  // Stupid CORS thing. Not allowed multiple origins.
  // Compare against allowed origins : if ok, set origin to reqeust origin
  const allowed = allowedOrigins.filter(o => o === requestOrigin)
  if (allowed.length > 0) origin = allowed[0]

  if (event.httpMethod === 'OPTIONS' || event.httpMethod === 'options') {
    return callback(null, {
      statusCode: 200,
      body: 'OK',
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
        'Access-Control-Allow-Headers': 'content-type',
        'Content-Type': 'application/json',
      },
    })
    return
  }

  // Try parse body as could be options request (which will be base64 encoded body, ie fail parse)
  let body = JSON.parse(event.body)
  const email = body.email

  transport.sendMail(createMailOptions(email), () => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ email }),
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
        'Access-Control-Allow-Headers': 'content-type',
        'Content-Type': 'application/json',
      },
    })
  })
}
