const express = require("express");

const router = express.Router();

const courseController = require("../controllers/courseController");

const addBookmark = require("../middlewares/user");

router.options("/course/all/:name", (req, res) => {
  console.log("this is wandas mehn", req.params);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
});

router.get("/course/all/:name", courseController.getAllCourses);

router.get("/course/:id", courseController.getCourse);

router.post("/status/:id", addBookmark, courseController.setStatus);

module.exports = router;
