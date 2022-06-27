const express = require("express");

const adminController = require("../controllers/adminController");
const adminCourseController = require("../controllers/adminCourseController");

const adminAuth = require("../middlewares/adminAuth");

const router = express.Router();

router.post("/add", adminController.add);

router.post("/auth", adminController.auth);

router.get("/getAdmin/:id", adminController.getAdmin);

router.post("/contact", adminController.contact);

router.post("/blog", adminController.blog);

router.get("/course/all/:name", adminCourseController.getAllCourses);
router.get("/course/:id", adminCourseController.getCourse);
router.options("/course/all/:name", (req, res) => {
  console.log("this is wandas mehn", req.params);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
});
router.options("/course/:id", (req, res) => {
  console.log("this is wandas mehn", req.params);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
});

router.post(
  "/search/course/:id",
  adminAuth,
  adminCourseController.getSingleCourse
);

router.post("/course/:id", adminCourseController.course);

router.post("/course/create/:name", adminCourseController.createCourse);

router.post("/course/edit/:id", adminCourseController.editCourse);

router.post("/send", adminController.send);

router.post("/sendAll", adminController.sendAll);

/**
 * Handeling CRUD operations
 */
router.post("/delete/course/:id", adminCourseController.deleteCourse);

module.exports = router;
