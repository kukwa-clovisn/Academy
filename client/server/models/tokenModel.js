var mongoose = require('mongoose');


const tokenSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true
     },
     token: {
          type: String,
          required: true
     }
}, {
     collection: 'client_jwt'
})

const tokenModel = mongoose.model('tokenSchema', tokenSchema)

module.exports = tokenModel;