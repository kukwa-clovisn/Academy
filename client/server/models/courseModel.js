var mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     title: {
          type: String,
          required: true
     },
     vidoeUrl: {
          type: String,
          required: true
     },
     free: {
          type: Boolean,
          required: true
     }
}, {
     collection: 'courses'
})

const signupUserModel = mongoose.model('courseSchema', courseSchema)

module.exports = signupUserModel;