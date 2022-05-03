var mongoose = require('mongoose');


const signupUserSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true
     },
     notify: {
          type: Boolean,
          require: true
     }
}, {
     collection: 'signup-clients'
})

const signupUserModel = mongoose.model('signupUserSchema', signupUserSchema)

module.exports = signupUserModel;