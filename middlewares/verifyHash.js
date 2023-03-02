const bcrypt = require('bcrypt')

const verifyToken = async (token, hash, nameCheck) => {

     let salt = await bcrypt.genSalt();

     let newToken = await bcrypt.hash(token, salt);

     let result = await bcrypt.compare(token, hash);

     if (result === true) {

          return true;

     } else {

          return false;
     }
}


module.exports = verifyToken;