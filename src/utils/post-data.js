
/**
 *
 * Run:
 *
 */
let PRIVATE_KEY = "" ;
let PUBLIC_KEY = "" ;


const mailjet = require('node-mailjet').connect(
    PUBLIC_KEY,
    PRIVATE_KEY 
  )
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: '$SENDER_EMAIL',
          Name: 'Me',
        },
        To: [
          {
            Email: '$RECIPIENT_EMAIL',
            Name: 'You',
          },
        ],
        Subject: 'My first Mailjet Email!',
        TextPart: 'Greetings from Mailjet!',
        HTMLPart:
          '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  })
  request
    .then(result => {
      console.log(result.body)
    })
    .catch(err => {
      console.log(err.statusCode)
})