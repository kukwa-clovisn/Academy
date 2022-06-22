const signupCollection = require("../models/adminModel");

async function addCollection() {
  try {
    await signupCollection.updateMany(
      {},
      {
        $set: {
          course: [],
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = addCollection;
