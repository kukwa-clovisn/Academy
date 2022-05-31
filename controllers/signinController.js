const signupUserModel = require("../models/signupModel");

const capitalizeUserName = require('../middlewares/capitalize')

const userToken = require('../utils/jwt');

const verifyToken = require('../middlewares/verifyHash')

const jwt = require('jsonwebtoken')


module.exports = {
     post: (req, res) => {
          let findUser = capitalizeUserName(req.body.username);

          signupUserModel.findOne({
               username: findUser
          }, async (err, data) => {
               try {

                    if (err) return res.status(401)

                    // id the user is not logged in,
                    if (!data) return res.status(403).json({
                         msg: `user ${findUser} has no account.`
                    })

                    // if data, compare password,
                    let result = await verifyToken(req.body.password, data.password, findUser);

                    if (!result) return res.status(403).json({
                         msg: 'unauthorized user. incorrect password'
                    })

                    let accessToken = userToken.createUserToken(req.body);

                    return res.status(200).json({
                         username: data.username,
                         accessId: data._id,
                         msg: "redirecting to course page...",
                         accessToken
                    })

               } catch (err) {
                    return res.status(403).json(err);

               }
          })
     }
}