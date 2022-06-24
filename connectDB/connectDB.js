const mongoose = require('mongoose');

const connectDb = (url) => {
     mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     }).then(res => console.log("mongodb connected.....")).catch(err => console.log(err))
}


module.exports = connectDb;