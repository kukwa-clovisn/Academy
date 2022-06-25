var mongoose = require("mongoose");

const designSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    views: {
      type: Array,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    objectives: {
      type: Array,
      required: false,
    },
    intro: {
      type: String,
      required: false,
    },
    firstdescription: {
      type: String,
      required: false,
    },
    seconddescription: {
      type: String,
      required: false,
    },
    thirddescription: {
      type: String,
      required: false,
    },
    conclusion: {
      type: String,
      required: false,
    },
    firstvideolist: {
      type: Array,
      required: false,
    },
    secondvideolist: {
      type: Array,
      required: false,
    },
    thirdvideolist: {
      type: Array,
      required: false,
    },
    free: {
      type: String,
      required: true,
    },
    Bookmarks: {
      type: Array,
      required: false,
    },
    likes: {
      type: Array,
      required: false,
    },
    dislikes: {
      type: Array,
      required: false,
    },
    comments: {
      type: Array,
      required: false,
    },
  },
  {
    collection: "Design",
  }
);

const designModel = mongoose.model("designSchema", designSchema);

module.exports = designModel;
