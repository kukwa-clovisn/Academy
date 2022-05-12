const signupUserModel = require("../models/signupModel");

const capitalizeUserName = require('../middlewares/capitalize')

const userToken = require('../utils/jwt');

const verifyToken = require('../middlewares/verifyHash')

const jwt = require('jsonwebtoken')


module.exports = {
     get: (req, res) => {
          let authHeader = req.headers['authorization']
          let [
               bearer,
               token
          ] = authHeader.split(" ");
          console.log(token)

          if (token === null) {
               return res.status(401).json({
                    msg: "Unauthorized user!"
               })
          }
          jwt.verify(token, process.env.user_login_token, (err, data) => {
               if (err) {
                    console.log(err)

                    return res.json(err)
               }

               if (!data) {
                    return res.status(403).json({
                         msg: "token expired"
                    })
               }


               let userName = capitalizeUserName(data.username)
               signupUserModel.findOne({
                    username: userName
               }, (err, user) => {
                    if (err) return res.status(500).json(err);

                    res.json({
                         user
                    });

                    return;
               }).select('-password').select('-token')

          })



     },
     post: (req, res) => {
          let findUser = capitalizeUserName(req.body.username);

          signupUserModel.findOne({
               username: findUser
          }, async (err, data) => {
               try {

                    if (err) {
                         res.status(403).json(err)
                         return console.log(err)
                    }

                    // id the user is not logged in,
                    if (!data) {
                         console.log(`user ${findUser} has no account`)
                         return res.status(401).json({
                              msg: `user ${findUser} has no account.`
                         })
                    }

                    // if data, compare password,
                    let result = await verifyToken(req.body.password, data.password, findUser);

                    if (!result) {
                         res.status(401).json({
                              msg: 'unauthorized user. incorrect password'
                         })

                         return console.log('unauthorized user. incorrect password')
                    }

                    let accessToken = userToken.createUserToken(req.body);
                    // let refreshToken = userToken.createUserRefreshToken(req.body);

                    return res.status(200).json({
                         msg: "log in successful",
                         accessToken,
                         refreshToken: data.token
                    })

               } catch (err) {
                    res.status(403).json(err);
                    return console.log(err)
               }
          })
     }
}