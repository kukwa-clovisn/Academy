var mongoose = require("mongoose");

const signupUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    signupDate: {
      type: Date,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    subscription: {
      type: Array,
      required: false,
    },
    todos: Array,
    Bookmarks: Array,
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
    profession: {
      type: String,
      required: false,
    },
    dob: {
      type: Date,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    public: {
      type: Boolean,
      required: false,
    },
    school_company: {
      type: String,
      required: false,
    },
  },
  {
    collection: "signup_clients",
  }
);

const signupUserModel = mongoose.model("signupUserSchema", signupUserSchema);

module.exports = signupUserModel;
