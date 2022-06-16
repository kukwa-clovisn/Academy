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
    videoUrl: {
      type: String,
      required: true,
    },
    free: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "courses",
  }
);

const courseModel = mongoose.model("courseSchema", courseSchema);

module.exports = courseModel;
