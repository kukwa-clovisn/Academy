var mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
     author: {
          type: String,
          required: true
     },
     title: {
          type: String,
          required: true
     },
     subTitle: {
          type: String,
          required: true
     },
     message: {
          type: Boolean,
          required: true
     },
     date: {
          type: String,
          required: true
     }
}, {
     collection: 'posts'
})

const postModel = mongoose.model('postSchema', postSchema)

module.exports = postModel;