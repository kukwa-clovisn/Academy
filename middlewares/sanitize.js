let {
     check,
     validationResult
} = require('express-validator');

const sanitizeData = async (req, res, next) => {
     try {
          await [
               check('username').not().isEmpty().withMessage('username can not be empty or only numbers').trim().escape(),
               check('password').isLength({
                    min: 5
               }).trim().escape().withMessage('password should contain at least 5 characters'),
               check('email').isEmail().normalizeEmail()
          ]

          let checkError = validationResult(req);


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
          return err;
     }

}



module.exports = sanitizeData;