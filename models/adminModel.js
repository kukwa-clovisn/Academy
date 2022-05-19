var mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
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
     admin: {
          type: String,
          required: true
     }

}, {
     collection: 'admins'
})

const adminModel = mongoose.model('adminSchema', adminSchema)

module.exports = adminModel;