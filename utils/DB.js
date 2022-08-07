const signupModel = require("../models/signupModel");

async function addCollection() {
  try {
    await signupModel.updateMany(
      {},
      {
        $set: {
          // school_company: null,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = addCollection;
