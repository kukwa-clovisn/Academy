const userModel = require('../models/signupModel');

const jwt = require('jsonwebtoken');

const hashFunc = require('../middlewares/hash');

const mailjet = require('node-mailjet')
     .connect(process.env.mail_api_key, process.env.mail_secret_key)

require('dotenv').config()


module.exports = {
     post: (req, res) => {
          let email = req.body.email;

          userModel.findOne({
               email
          }, (err, data) => {
               if (err) return res.status(401);


               if (!data) return res.status(403);

               let token = jwt.sign({
                    username: data.username,
                    email: data.email
               }, process.env.passwordChangeToken, {
                    expiresIn: process.env.passwordTokenLife
               })

               let verificationTokenList = token.split('.');
               let verificationToken = "";

               for (let i = 0; i < 5; i++) {
                    verificationToken += verificationTokenList[2][i];
               }

               const request = mailjet
                    .post("send", {
                         'version': 'v3.1'
                    })
                    .request({
                         "Messages": [{
                              "From": {
                                   "Email": "kukwaclovisngong3@gmail.com",
                                   "Name": "Advanced Tech Academy"
                              },
                              "To": [{
                                   "Email": data.email,
                                   "Name": data.username
                              }],
                              "Subject": "Advanced Tech Academy",
                              "TextPart": "<h1>Password Reset</h1>",
                              "HTMLPart": `<h1> Hello ${data.username}</h1> <p>You've made a request to reset your password</p> <p>this is your password reset token which expires after 60s(one minute) <br /> <p><a> ${verificationToken}</a></p>  <br /> Don't share the token with anyone or risk loosing your account. <br /> <a href="https://advancedtechacademy.herokuapp.com">advancedtechacademy.com</a>.</p>`,
                              "CustomID": "AppGettingStartedTest"
                         }]
                    })
               request
                    .then((result) => {
                         return res.status(200).json({
                              username: data.username,
                              msg: "password successfully updated",
                              updateToken: token
                         });
                    })
                    .catch((err) => {
                         return err.statusCode
                    })

          }).select('-password').select('-token')

     },
     token: (req, res) => {
          let token = req.body.token;

          let userToken = req.body.userToken
          let tokenList = userToken.split('.');

          let receivedToken = tokenList[2];

          let sentBackToken = "";

          for (let i = 0; i < 5; i++) {
               sentBackToken += receivedToken[i];
          }

          if (token !== sentBackToken) return res.status(403).json({
               msg: "wrong token"
          })

          return res.status(200).json({
               msg: "token validated"
          })

     },
     update: (req, res) => {
          let email = req.body.email;

          userModel.findOne({
               email
          }, async (err, data) => {
               try {

                    let userKey = await hashFunc(req.body.password)

                    let filter = {
                         email
                    }
                    let update = {
                         password: userKey
                    }

                    let opts = {
                         new: true
                    }


                    let user = await userModel.findOneAndUpdate(filter, update, opts);

                    return res.status(200).json({
                         user,
                         msg: "password successfully updated"
                    })

               } catch (err) {
                    return res.status(500).json({
                         msg: "update rejected!"
                    })
               }

          })
     }
}