const express = require("express");

const router = express.Router();

const userModel = require("../models/signupModel");

const fs = require("fs");

module.exports = {
  upload: (req, res) => {
    let singleImg = req.file;
    let id = req.headers.accessid;

    // converting the image into a base64 image
    let encoded_img = fs.readFileSync(singleImg.path);

    encoded_img = encoded_img.toString("base64");

    userModel.findByIdAndUpdate(
      id,
      {
        image: encoded_img,
      },
      { new: true },
      (err, data) => {
        if (err) return res.status(500);
        if (!data) return res.status(401).json({ msg: "User not found" });
        return res.status(200).json(data);
      }
    );
  },
};
