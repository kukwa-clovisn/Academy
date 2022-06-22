var mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
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
  },
  {
    collection: "courses",
  }
);

const courseModel = mongoose.model("courseSchema", courseSchema);

module.exports = courseModel;
