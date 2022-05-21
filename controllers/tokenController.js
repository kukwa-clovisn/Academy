const signupUserModel = require("../models/signupModel");

const capitalizeUserName = require('../middlewares/capitalize')

const jwt = require('jsonwebtoken')


const refreshTokenAuth = (req, res) => {

     let authHeader = req.headers['authorization']
     let [
          bearer,
          token
     ] = authHeader.split(" ");

     if (token === null) {
          return res.status(401).json({
               msg: "Unauthorized user!"
          })
     }
     console.log(token);
     jwt.verify(token, process.env.user_login_token, (err, data) => {
          if (err) {
               console.log(err);
               return res.status(403).json(err)
          }

          if (!data) {
               console.log('dkfla');
               return res.status(403).json({
                    msg: "token expired"
               })
          }

          console.log(data);

          let userName = capitalizeUserName(data.username)
          signupUserModel.findOne({
               username: userName
          }, (err, user) => {
               if (err) return res.status(500).json(err);

               return res.status(200).json({
                    user
               });
          }).select('-password')

     })




}

module.exports = refreshTokenAuth;