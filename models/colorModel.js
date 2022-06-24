var mongoose = require("mongoose");

const colorSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
    },
    primarycolor: {
      type: String,
      required: true,
    },
    secondarycolor: {
      type: String,
      required: true,
    },
    tertiarycolor: {
      type: String,
      required: true,
    },
    basecolor: {
      type: String,
      required: true,
    },
    fallback: {
      type: String,
      required: true,
    },
    misc: {
      type: String,
      required: false,
    },
    textcolor1: {
      type: String,
      required: true,
    },
    textcolor2: {
      type: String,
      required: true,
    },
    randomcolor: {
      type: String,
      required: false,
    },
  },
  {
    collection: "color",
  }
);

const colorModel = mongoose.model("colorSchema", colorSchema);

module.exports = colorModel;
