const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.post("/add", adminController.add);

router.post("/auth", adminController.auth);

router.post("/contact", adminController.contact);

router.post("/blog", adminController.blog);

router.get("/course/all/:name", adminController.getAllCourses);

router.get("/course/:id", adminController.getCourse);

router.post("/course/:id", adminController.course);

router.post("/course/create/:name", adminController.createCourse);

router.post("/send", adminController.send);

router.post("/sendAll", adminController.sendAll);

module.exports = router;
