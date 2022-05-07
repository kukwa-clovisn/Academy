const signupUserModel = require("../models/signupModel");

// const bcrypt = require("bcrypt");

const hashFunc = require('../middlewares/hash');

const capitalizeUserName = require('../middlewares/capitalize');

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
          console.log(req.body)

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
                         await signupUserModel.findOne({
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

                                   // capitalizing the username
                                   let registeredName = capitalizeUserName(req.body.username);

                                   /**
                                    * hashing password
                                    */

                                   let userKey = await hashFunc(req.body.password);


                                   console.log(registeredName);

                                   if (req.body.notify === undefined) {
                                        user = {
                                             username: registeredName,
                                             email: req.body.email,
                                             password: userKey,
                                             notify: false
                                        }
                                   } else {
                                        user = {
                                             username: registeredName,
                                             email: req.body.email,
                                             password: userKey,
                                             notify: true
                                        }
                                   }

                                   // defining user to be stored in database


                                   let {
                                        password,
                                        ...response
                                   } = user;

                                   //     storing user in database
                                   await signupUserModel.create(user);

                                   /**
                                    * return a response with the user data
                                    */
                                   res.json({
                                        msg: "user successfully signed up. signup successful",
                                        data: response,
                                   });

                                   return console.log("user:", user);
                              } catch (err) {

                                   console.log(err)
                                   return res.status(403).json(err);
                              }
                         })
                    } catch (err) {
                         return console.log(err)
                    }



               }
          ).select('-password')
     }

}