let {
     check,
     validationResult
} = require('express-validator');

const sanitizeData = async (req, res, next) => {
     try {
          console.log(req.body)
          await [
               check('username').not().isEmpty().withMessage('username can not be empty or only numbers').trim().escape(),
               check('password').isLength({
                    min: 5
               }).trim().escape().withMessage('password should contain at least 5 characters'),
               check('email').isEmail().normalizeEmail()
          ]

          let checkError = validationResult(req);

          console.log(checkError);


          if (!checkError.isEmpty()) {
               for (let i = 0; i < checkError.errors.length; i++) {
                    msgs += checkError.errors[i].msg
               }
               return res.json({
                    msgs
               })
          }
          next()
     } catch (err) {
          console.log(err)
     }

}



module.exports = sanitizeData;