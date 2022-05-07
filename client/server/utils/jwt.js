const jwt = require('jsonwebtoken')

const createUserToken = (data) => {
     return jwt.sign({
               id: data.id,
               username: data.username,
               email: data.email,
          },
          process.env.user_login_token, {
               expiresIn: process.env.tokenLife,
          }
     )
}


const verifyUserToken = async (userToken) => {
     try {
          jwt.verify(userToken, process.env.user_login_token, (err, data) => {
               if (err) {
                    return res.status(500).json(err)
               }
               console.log(data)
               return data;
          })

     } catch (err) {
          console.log(err);
     }
}

module.exports = {
     createUserToken,
     verifyUserToken
};