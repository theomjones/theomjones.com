const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
})

exports.handler = (event, context, callback) => {
  const data = JSON.parse(JSON.stringify(event)).body
  let body = JSON.parse(data)

  transport
    .sendMail({
      to: 'theomjones@gmail.com',
      from: body.email,
      subject: 'Website Submission',
      html: `<p>You got a sumbission from ${body.email}</p>`,
      replyTo: body.email,
    })
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: body.email,
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: 500,
        body: 'Something went terribly wrong...',
      })
    })
}
