const express = require("express");

const adminController = require("../controllers/adminController");

const adminAuth = require("../middlewares/adminAuth");

const router = express.Router();

router.post("/add", adminController.add);

router.post("/auth", adminController.auth);

router.get("/getAdmin/:id", adminController.getAdmin);

router.post("/contact", adminController.contact);

router.post("/blog", adminController.blog);

router.get("/course/all/:name", adminAuth, adminController.getAllCourses);

router.options("/course/all/:name", (req, res) => {
  console.log("this is wandas mehn", req.params);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
});

router.get("/course/:id", adminAuth, adminController.getCourse);

router.post("/course/:id", adminController.course);

router.post("/course/create/:name", adminController.createCourse);

router.post("/send", adminController.send);

router.post("/sendAll", adminController.sendAll);

module.exports = router;
