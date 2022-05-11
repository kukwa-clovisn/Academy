const tokenModel = require('../models/tokenModel');
const signUpUserModel = require('../models/signupModel');
const createNewAccessToken = require('../utils/jwt')
const jwt = require('jsonwebtoken')
const capitalizeUserName = require('../middlewares/capitalize')

const reviewToken = (req, res) => {
     // console.log(req.body.token)
     // res.json(req.body)

     tokenModel.findOne({
          token: req.body.token
     }, async (err, data) => {
          if (err) return res.status(401);

          if (!data) {
               return res.status(403).json({
                    msg: "unauthenticated user"
               })
          }

          jwt.verify(req.body.token, process.env.user_login_refresh_token, (err, data) => {
               if (err) return res.status(401);

               if (!data) {
                    return res.status(403).json({
                         msg: "unauthorized user"
                    })
               }
               let capitalizedName = capitalizeUserName(data.username);
               signUpUserModel.findOne({
                    "username": capitalizedName
               }, (err, response) => {
                    if (err) return res.status(401);

                    if (!response) {
                         return res.json({
                              msg: "unauthenticated user"
                         })
                    }

                    let newAccessToken = createNewAccessToken.createUserToken(data);

                    res.json({
                         token: newAccessToken
                    })

                    return console.log(newAccessToken)

               }).select('-password')



          })


     })

}

module.exports = reviewToken;