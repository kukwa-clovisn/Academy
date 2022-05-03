const bcrypt = require('bcrypt')

/**
 * hashing the password
 */

const hashFunc = async (password) => {

     let salt = await bcrypt.genSalt();

     const userKey = await bcrypt.hash(password, salt);

     return userKey;
}



module.exports = hashFunc;