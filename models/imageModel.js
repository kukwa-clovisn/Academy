var mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    encoded_image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "images",
  }
);

const imageModel = mongoose.model("imageSchema", imageSchema);

module.exports = imageModel;
