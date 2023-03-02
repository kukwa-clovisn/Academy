var mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
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
    course: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    objectives: {
      type: Array,
      required: false,
    },
    videoUrl: {
      type: String,
      required: false,
    },
    free: {
      type: Boolean,
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
    collection: "courses",
  }
);

const courseModel = mongoose.model("courseSchema", courseSchema);

module.exports = courseModel;
