const signupUserModel = require("../models/signupModel");

const hashFunc = require('../middlewares/hash');

const capitalizeUserName = require('../middlewares/capitalize');

const userToken = require('../utils/jwt')

const {
     validationResult
} = require('express-validator')


module.exports = {
     post: (req, res) => {
          let checkError = validationResult(req);
          if (!checkError.isEmpty()) {
               let msg = "";
               for (let i = 0; i < checkError.errors.length; i++) {
                    msg += checkError.errors[i].msg;
               }
               console.log(checkError.errors);
               res.status(401).json({
                    msg,
               });
          }

          let newEmail = req.body.email;

          if (req.body.password.length < 4) {
               console.log(
                    'invalid password'
               )
               return res.status(401).json({
                    msg: "invalid password"
               })
          }

          let newUser = capitalizeUserName(req.body.username);

          /**
           * checking if user alredy exist with same name
           */
          signupUserModel.findOne({
                    username: newUser,
               },
               async (err, data) => {
                    try {
                         if (err) {
                              res.status(403).json(err)
                              return console.log(err);
                         }
                         if (data) {

                              return res.json({
                                   msg: ` user ${req.body.username} already has an account.`
                              });
                         }
                         /**
                          * checking if a user already exist with the same email
                          */
                         signupUserModel.findOne({
                              email: newEmail
                         }, async (err, data) => {
                              try {

                                   if (err) {
                                        res.status(401).json(err)
                                        return console.log(err)
                                   }

                                   if (data) {
                                        console.log(data)


                                        res.json({
                                             msg: `user email ${req.body.email} already has an account.`

                                        })
                                        return console.log(`email ${req.body.email} already has an account.`)
                                   }

                                   /**
                                    * hashing password
                                    */

                                   let userKey = await hashFunc(req.body.password);

                                   /**
                                    * creating a unigue token for every signed up user
                                    */

                                   let refreshToken = userToken.createUserRefreshToken(req.body);

                                   // defining user to be stored in database

                                   let user = {
                                        username: newUser,
                                        email: req.body.email,
                                        password: userKey,
                                        token: refreshToken
                                   }
                                   console.log(user);

                                   //     storing user in database
                                   // await signupUserModel.create(user);

                                   /**
                                    * return a response with the user data
                                    */
                                   res.status(200).json({
                                        msg: "user successfully signed up. signup successful",
                                   });

                              } catch (err) {

                                   console.log(err)
                                   return res.status(403).json(err);
                              }
                         }).select('-password')
                    } catch (err) {
                         return console.log(err)
                    }



               }
          ).select('-password')
     }

}