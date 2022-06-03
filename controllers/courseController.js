const courseModel = require('../models/courseModel');

const mailjet = require('node-mailjet')
     .connect(process.env.mail_api_key, process.env.mail_secret_key)


const get = (req, res) => {

     let data = {
          id: req.params.ida,
          name: 'cryptocurrency',
          title: 'The history and emergence of BITCOIN',
          videoUrl: "How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4",
          free: true
     }

     return res.json(
          data
     )
}

const post = (req, res) => {

     return res.status(200).json({
          msg: "course uploaded"
     })
}

const contact = (req, res) => {
     const request = mailjet
          .post("send", {
               'version': 'v3.1'
          })
          .request({
               "Messages": [{
                    "From": {
                         "Email": "kukwaclovisngong3@gmail.com",
                         "Name": "kukwa clovis"
                    },
                    "To": [{
                         "Email": "kukwaclovisngong3@gmail.com",
                         "Name": "kukwa clovis"
                    }],
                    "Subject": "Advanced Tech Academy",
                    "TextPart": "Question from user",
                    "HTMLPart": `<h1>${req.body.email}</h1><br />${req.body.message}`,
                    "CustomID": "AppGettingStartedTest"
               }]
          })
     request
          .then((result) => {
               return res.status(200).json({
                    msg: "message sent"
               })
          })
          .catch((err) => {
               return res.status(500).json(err);
          })
}

module.exports = {
     get,
     post,
     contact
};