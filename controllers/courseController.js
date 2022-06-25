const adminModel = require("../models/adminModel");
const signupModel = require("../models/signupModel");
const courseModel = require("../models/courseModel");
const designModel = require("../models/designModel");
const musicModel = require("../models/musicModel");
const blockchainModel = require("../models/blockchainModel");
const forexModel = require("../models/forexModel");
const cryptocurrencyModel = require("../models/cryptocurrencyModel");
const webModel = require("../models/webModel");

const capitalizeName = require("../middlewares/capitalize");

module.exports = {
  getAllCourses: (req, res) => {
    let courseName = req.params.name;
    // console.log(req.headers);
    console.log(courseName);

    if (req.headers["coursename"] === "Design") {
      designModel.find({ name: courseName }, (err, info) => {
        console.log("fldkjaf fakdf ");
        if (err) return res.status(403).json(err);
        console.log("info", info);
        return res.status(200).json(info);
      });
    }
    if (req.headers["coursename"] === "Web Development") {
      webModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        return res.status(200).json(info);
      });
    }
    if (req.headers["coursename"] === "Forex") {
      forexModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        return res.status(200).json(info);
      });
    }
    if (req.headers["coursename"] === "Cryptocurrency") {
      cryptocurrencyModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        return res.status(200).json(info);
      });
    }
    if (req.headers["coursename"] === "Blockchain") {
      blockchainModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        console.log(info);
        return res.status(200).json(info);
      });
    }
    if (req.headers["coursename"] === "Music") {
      musicModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        return res.status(200).json(info);
      });
    }
  },
};
