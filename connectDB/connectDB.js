const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    await mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongodb connected....."))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
