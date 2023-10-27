const adminModel = require("../models/adminModel");
const signupModel = require("../models/signupModel");
const courseModel = require("../models/courseModel");
const musicModel = require("../models/musicModel");
const webModel = require("../models/webModel");

const capitalizeName = require("../middlewares/capitalize");

module.exports = {
  course: (req, res) => {
    let bookmarkArr = [];
    bookmarkArr.push(req.body);

    courseModel.findByIdAndUpdate(
      req.params.id,
      {
        Bookmarks: [...bookmarkArr],
      },
      (err, info) => {
        if (err) {
          return res.status(400).json(err);
        }
      }
    );

    let courseUserArr = [];
    courseUserArr.push(req.body.courseId);

    signupModel.findByIdAndUpdate(
      req.body.userId,
      {
        Bookmarks: [...courseUserArr],
      },
      (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(201).json(data);
      }
    );
  },
  createCourse: (req, res) => {
    if (req.params.name === "Web Development") {
      webModel.create(req.body);
    }

    if (req.params.name === "Music") {
      musicModel.create(req.body);
    }

    return res.status(200).json(req.body);
  },
  editCourse: (req, res) => {
    let id = req.params.id;
    console.log(req.body);

    if (req.headers["coursename"] === "Web Development") {
      console.log(req.body);
      webModel.findByIdAndUpdate(
        id,
        {
          title: req.body.title,
          description: req.body.description,
          intro: req.body.intro,
          course: req.body.course,
          firstdescription: req.body.firstdescription,
          seconddescription: req.body.seconddescription,
          thirddescription: req.body.thirddescription,
          firstvideolist: req.body.firstvideolist,
          secondvideolist: req.body.secondvideolist,
          thirdvideolist: req.body.thirdvideolist,
          free: req.body.free,
          videoUrl: req.body.videoUrl,
          objectives: req.body.objectives,
          conclusion: req.body.conclusion,
        },
        (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        }
      );
    }

    if (req.headers["coursename"] === "Music") {
      musicModel.findByIdAndUpdate(
        id,
        {
          title: req.body.title,
          description: req.body.description,
          intro: req.body.intro,
          course: req.body.course,
          firstdescription: req.body.firstdescription,
          seconddescription: req.body.seconddescription,
          thirddescription: req.body.thirddescription,
          firstvideolist: req.body.firstvideolist,
          secondvideolist: req.body.secondvideolist,
          thirdvideolist: req.body.thirdvideolist,
          free: req.body.free,
          videoUrl: req.body.videoUrl,
          objectives: req.body.objectives,
          conclusion: req.body.conclusion,
        },
        (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
        }
      );
    }
  },
  getAllCourses: (req, res) => {
    let courseName = req.params.name;

    if (courseName === "Web Development") {
      webModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    }

    if (req.headers["coursename"] === "Music") {
      musicModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    }
  },
  getCourse: (req, res) => {
    let id = req.headers["editid"];
    let courseName = req.params.id;

    if (courseName === "Web Development") {
      webModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        if (!data) {
          return res.status(200).json({ data: [], msg: "not data found" });
        }
        res.status(200).json(data);
      });
      return;
    }

    if (courseName === "Music") {
      musicModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(data);
      });
      return;
    }
  },
  getSingleCourse: (req, res) => {
    let courseName = req.headers.coursename;
    findCourse = req.body.title;

    if (req.headers["coursename"] === "Web Development") {
      webModel.find({ name: courseName }, (err, data) => {
        if (err) return res.status(500).json(err);
        let newArr = [];
        data.map((course) => {
          if (course.title.includes(findCourse)) return newArr.push(course);
        });

        return res.status(200).json(newArr);
      });
    }

    if (req.headers["coursename"] === "Music") {
      musicModel.find({ name: courseName }, (err, data) => {
        if (err) return res.status(500).json(err);
        let newArr = [];
        data.map((course) => {
          if (course.title.includes(findCourse)) return newArr.push(course);
        });

        return res.status(200).json(newArr);
      });
    }
  },
  deleteCourse: (req, res) => {
    let id = req.body.id;

    if (req.headers["coursename"] === "Web Development") {
      webModel.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    }

    if (req.headers["coursename"] === "Music") {
      musicModel.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    }
    return res.status(200);
  },
};
