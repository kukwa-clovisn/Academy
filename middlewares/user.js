const signupModel = require("../models/signupModel");

function addBookmark(req, res, next) {
  let username = req.body.name;
  let statusArr = [];
  statusArr.push(req.body);

  signupModel.findOne({ name: username }, (err, data) => {
    if (req.body.like) {
      signupModel.findOneAndUpdate(
        { name: username },
        {
          likes: [...data.likes, ...statusArr],
        },
        (err, data) => {
          if (err) return res.status(500);
          next();
        }
      );
    }
    if (req.body.dislike) {
      signupModel.findOneAndUpdate(
        { name: username },
        {
          dislikes: [...data.dislikes, ...statusArr],
        },
        (err, data) => {
          if (err) return res.status(500);
          next();
        }
      );
    }
    if (req.body.bookmarked) {
      signupModel.findOneAndUpdate(
        { name: username },
        {
          Bookmarks: [...data.Bookmarks, ...statusArr],
        },
        (err, data) => {
          if (err) return res.status(500);
          next();
        }
      );
    }
    if (req.body.feedback) {
      signupModel.findOneAndUpdate(
        { name: username },
        {
          comments: [...data.comments, ...statusArr],
        },
        (err, data) => {
          if (err) return res.status(500);
          next();
        }
      );
    }
    if (req.body.viewed) {
      next();
    }
  });
}

module.exports = addBookmark;
