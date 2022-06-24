const adminModel = require("../models/adminModel");
const postModel = require("../models/postModel");
const signupModel = require("../models/signupModel");
const courseModel = require("../models/courseModel");
const designModel = require("../models/designModel");
const musicModel = require("../models/musicModel");
const blockchainModel = require("../models/blockchainModel");
const forexModel = require("../models/forexModel");
const cryptocurrencyModel = require("../models/cryptocurrencyModel");

require("dotenv").config();

const mailjet = require("node-mailjet").connect(
  process.env.mail_api_key,
  process.env.mail_secret_key
);

const capitalizeName = require("../middlewares/capitalize");
const verifyToken = require("../middlewares/verifyHash");
const hashFunc = require("../middlewares/hash");

const { check, validationResult } = require("express-validator");
const webModel = require("../models/webModel");

module.exports = {
  add: async (req, res) => {
    try {
      let adminName = capitalizeName(req.body.username);
      let hashkey = await hashFunc(req.body.password);

      const admin = {
        username: adminName,
        email: req.body.email,
        password: hashkey,
        admin: true,
      };

      await adminModel.create(admin);
      res.status(200).json(admin);
    } catch (err) {
      return err;
    }
  },
  auth:
    ([
      check("username")
        .not()
        .isEmpty()
        .withMessage("username can not be empty or only numbers")
        .trim()
        .escape(),
      check("password")
        .isLength({
          min: 5,
        })
        .trim()
        .escape()
        .withMessage("password should contain at least 5 characters"),
      check("email").isEmail().normalizeEmail(),
    ],
    (req, res) => {
      let checkError = validationResult(req);

      if (!checkError.isEmpty()) {
        for (let i = 0; i < checkError.errors.length; i++) {
          msgs += checkError.errors[i].msg;
        }
        return res.json({
          msgs,
        });
      }

      let adminName = capitalizeName(req.body.username);
      adminModel.findOne(
        {
          username: adminName,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
            return res.status(401).json(err);
          }

          if (!data)
            return res.status(403).json({
              msg: "Access Denied!",
            });

          if (data.email !== req.body.email)
            return res.status(403).json({
              msg: "Access Denied!",
            });

          let response = await verifyToken(
            req.body.password,
            data.password,
            adminName
          );

          if (!response) return res.status(403);

          for (let i = 0; i < data.course.length; i++) {
            if (data.course[i] === req.body.course) {
              return res.status(200).json({
                id: data._id,
                username: data.username,
                email: data.email,
                admin: data.admin,
                course: data.course[i],
              });
            }
          }
          return res.status(403).json({
            msg: `Access Denied. You don't have access to the ${req.body.course} course.`,
          });
        }
      );
    }),
  getAdmin: (req, res) => {
    let id = req.params.id;
    adminModel
      .findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(data);
      })
      .select("-password");
  },
  contact: (req, res) => {
    const request = mailjet
      .post("send", {
        version: "v3.1",
      })
      .request({
        Messages: [
          {
            From: {
              Email: "kukwaclovisngong3@gmail.com",
              Name: "Advanced Tech Academy",
            },
            To: [
              {
                Email: "kukwaclovisngong3@gmail.com",
                Name: "kukwa clovis",
              },
            ],
            Subject: "Advanced Tech Academy",
            TextPart: `${req.body.message}`,
            HTMLPart: `<h1>${req.body.username}</h1><h3>${req.body.email}</h3> <h3>${req.body.number}</h3><br />${req.body.message}`,
            CustomID: "AppGettingStartedTest",
          },
        ],
      });
    request
      .then((result) => {
        return res.status(200).json({
          msg: "success",
        });
      })
      .catch((err) => err.statusCode);
  },
  blog: async (req, res) => {
    try {
      let author = capitalizeName(req.body.author);
      let tags = req.body.tags;
      tags = tags.split(",");

      let post = {
        author,
        title: req.body.title,
        subTitle: req.body.subTitle,
        message: req.body.message,
        tags,
        date: new Date(),
      };

      await postModel.create(post);

      return res.json(post);
    } catch (err) {
      throw err;
    }
  },
  send: (req, res) => {
    const request = mailjet
      .post("send", {
        version: "v3.1",
      })
      .request({
        Messages: [
          {
            From: {
              Email: "kukwaclovisngong3@gmail.com",
              Name: "Advanced Tech Academy",
            },
            To: [
              {
                Email: `${req.body.email}`,
                Name: `${req.body.username}`,
              },
            ],
            Subject: "Advanced Tech Academy",
            TextPart: `${req.body.message}`,
            HTMLPart: `<h1>Hi ${req.body.username}</h1> <br /> <p>${req.body.message}</p> <br /> <h4><a href="https://advancedtechacademy.herokuapp.com">Visit site</a></h4>`,
            CustomID: "AppGettingStartedTest",
          },
        ],
      });
    request
      .then((result) => {
        return res.status(200).json({
          msg: "Email sent",
        });
      })
      .catch((err) => err.statusCode);
  },
  sendAll: (req, res) => {
    signupModel.find({}, (err, data) => {
      if (err) return res.status(500).json(err);

      if (!data) return res.status(200).json({ msg: "no clients found" });

      let emailArr = [];

      for (let i = 0; i < data.length; i++) {
        let client = {
          Name: data[i].username,
          Email: data[i].email,
        };
        emailArr.push(client);
      }

      const request = mailjet
        .post("send", {
          version: "v3.1",
        })
        .request({
          Messages: [
            {
              From: {
                Email: "kukwaclovisngong3@gmail.com",
                Name: "Advanced Tech Academy",
              },
              To: emailArr,
              Subject: "Advanced Tech Academy",
              TextPart: `${req.body.message}`,
              HTMLPart: `<h1 style="text-transform:capitalize;"> ${req.body.subject}</h1> <br /><h3>${req.body.aim}</h3> <p style="color:white; background:rgb(19, 37, 62); border-radius:5px; padding:20px; font-size: 17px;">${req.body.message} <button style="border:none; width: 80%; height: 40px; border-radius:5px; margin: 5px auto; display:block; background:white; color: white;"> <a href="https://advancedtechacademy.herokuapp.com" style="text-decoration:none; color: rgba(230, 101, 129, 1); width: 100%; height:fit-content; display:flex; justify-content:center; align-items:center; flex-direction:row; text-transform:capitalize; padding:0; font-weight:600;">visite site</a> </button></p> <br /> <h4><a href="https://advancedtechacademy.herokuapp.com">Visit site</a></h4><h4><a href="https://codingherald.herokuapp.com">codingheraldapps</a></h4>`,
              CustomID: "AppGettingStartedTest",
            },
          ],
        });
      request
        .then((result) => {
          return res.status(200).json({
            msg: "Email sent",
          });
        })
        .catch((err) => err.statusCode);
    });
  },
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
    if (req.params.name === "Design") {
      designModel.create(req.body);
    }
    if (req.params.name === "Web Development") {
      webModel.create(req.body);
    }
    if (req.params.name === "Forex") {
      forexModel.create(req.body);
    }
    if (req.params.name === "Blockchain") {
      blockchainModel.create(req.body);
    }
    if (req.params.name === "Cryptocurrency") {
      cryptocurrencyModel.create(req.body);
    }
    if (req.params.name === "Music") {
      musicModel.create(req.body);
    }

    return res.status(200).json(req.body);
  },
  getAllCourses: (req, res) => {
    let courseName = req.params.name;

    courseModel.find({ name: courseName }, (err, info) => {
      if (err) return res.status(403).json(err);
      return res.status(200).json(info);
    });
  },
  getCourse: (req, res) => {
    courseModel.findOne({ _id: req.params.id }, (err, data) => {
      if (err) return res.status(403).json(err);
      if (!data) return res.status(200).json({ msg: "no courses found" });

      return res.status(200).json(data);
    });
  },
};
