const express = require("express");

const router = express.Router();

const courseController = require("../controllers/courseController");

router.get("/course/all/:name", courseController.getAllCourses);

module.exports = router;
