const adminModel = require("../models/adminModel");

function admin(req, res, next) {
  let accessId = req.headers.adminid;
  let courseName = req.headers.coursename;
  console.log(req.headers["private"]);
  if (!req.headers["private"]) {
    adminModel.findOne({ _id: accessId }, (err, data) => {
      if (err) return res.status(500).json(err);

      let courseArr = [];
      for (let i = 0; i < data.course.length; i++) {
        if (data.course[i] === courseName) {
          courseArr.push(data.course[i]);
        }
      }

      if (!courseArr.length) {
        return res.status(401).json({
          msg: "You're not registered for this course!",
        });
      }
      next();
    });
  } else {
    next();
  }
}

module.exports = admin;
