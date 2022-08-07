const express = require("express");

const router = express.Router();

const multer = require("multer");

const fs = require("fs");

const imageModel = require("../models/imageModel");

const Storage = multer.diskStorage({
  destination: "../uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// setting up the multer =====================================================>
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../server/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/svg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter: fileFilter,
});

router.post("/", upload.single("file"), (req, res) => {
  console.log("body:", req.body);
  console.log("file:", req.file);

  let singleImg = req.file;

  // converting the image into a base64 image
  let encoded_img = fs.readFileSync(singleImg.path);

  encoded_img = encoded_img.toString("base64");

  const newImage = new imageModel({
    name: req.file.originalname,
    encoded_image: encoded_img,
    contentType: req.file.mimetype,
    //     image: {
    //       data: req.file.filename,
    //       contentType: "image/png",
    //     },
  });

  console.log(newImage);

  newImage
    .save()
    .then((resp) => {
      console.log(resp);

      return res.status(200).json({
        msg: "image uploaded",
        newImage,
        res: resp,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
});

module.exports = router;
