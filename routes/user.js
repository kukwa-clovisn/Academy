const express = require("express");

const router = express.Router();

const courseController = require("../controllers/courseController");

const userDataController = require("../controllers/todoController");

const imageUploadController = require("../controllers/imageUploadController");

const addBookmark = require("../middlewares/user");

const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "../uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// setting up the multer =====================================================>
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
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

router.options("/course/all/:name", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
});

router.get("/course/all/:name", courseController.getAllCourses);

router.get("/course/:id", courseController.getCourse);

router.options("/status/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
});

router.post("/status/:id", addBookmark, courseController.setStatus);

router.post("/update/:id", userDataController.update_user);

router.post("/upload", upload.single("image"), imageUploadController.upload);

module.exports = router;
