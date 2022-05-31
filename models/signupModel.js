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
     token: {
          type: String,
          required: true
     },
     todos: Array

}, {
     collection: 'signup_clients'
})

const signupUserModel = mongoose.model('signupUserSchema', signupUserSchema)

module.exports = signupUserModel;