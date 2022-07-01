const signupCollection = require("../models/forexModel");

async function addCollection() {
  try {
    await signupCollection.updateMany(
      {},
      {
        $set: {
          author: "Atech",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = addCollection;
