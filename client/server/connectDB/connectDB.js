const mongoose = require('mongoose');

const connectDb = (url) => {
     mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     }).then(res => console.log("mongodb connected....."))
}


module.exports = connectDb;