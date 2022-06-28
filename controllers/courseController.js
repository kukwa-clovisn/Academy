const signupModel = require("../models/signupModel");
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

    if (courseName === "Design") {
      designModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    } else if (courseName === "Web Development") {
      webModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    } else if (courseName === "Forex") {
      forexModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    } else if (courseName === "Cryptocurrency") {
      cryptocurrencyModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    } else if (courseName === "Blockchain") {
      blockchainModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    } else if (courseName === "Music") {
      musicModel.find({ name: courseName }, (err, info) => {
        if (err) return res.status(403).json(err);
        res.status(200).json(info);
      });
      return;
    }
  },
  getCourse: (req, res) => {
    let courseName = req.headers["coursename"];
    let id = req.params.id;
    if (courseName === "Design") {
      designModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(data);
      });
      return;
    } else if (courseName === "Web Development") {
      webModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        if (!data) {
          return res.status(200).json({ data: [], msg: "not data found" });
        }
        res.status(200).json(data);
      });
      return;
    } else if (courseName === "Forex") {
      forexModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        if (!data) {
          return res.status(200).json({ data: [], msg: "not data found" });
        }
        res.status(200).json(data);
      });
      return;
    } else if (courseName === "Cryptocurrency") {
      cryptocurrencyModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(data);
      });
      return;
    } else if (courseName === "Blockchain") {
      blockchainModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(data);
      });
      return;
    } else if (courseName === "Music") {
      musicModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(data);
      });
      return;
    }
  },
  setStatus: (req, res) => {
    let id = req.body.id;
    let courseName = req.params.id;
    let username = req.body.name;
    let statusArr = [];
    statusArr.push(req.body);
    if (courseName === "Design") {
      designModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);

        if (data) {
          if (req.body.like) {
            designModel.findByIdAndUpdate(
              id,
              {
                likes: [...data.likes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.dislike) {
            designModel.findByIdAndUpdate(
              id,
              {
                dislikes: [...data.dislikes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.viewed) {
          } else if (req.body.bookmarked) {
            designModel.findByIdAndUpdate(
              id,
              {
                Bookmarks: [...data.Bookmarks, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                if (data) {
                  res.status(200).json(data);
                }
              }
            );
            return;
          } else if (req.body.feedback) {
            designModel.findByIdAndUpdate(
              id,
              {
                comments: [...data.comments, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          }
        }
      });
    } else if (courseName === "Web Development") {
      webModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data) {
          if (req.body.like) {
            webModel.findByIdAndUpdate(
              id,
              {
                likes: [...data.likes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.dislike) {
            webModel.findByIdAndUpdate(
              id,
              {
                dislikes: [...data.dislikes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.viewed) {
            webModel.findByIdAndUpdate(
              id,
              {
                views: [...data.views, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.bookmarked) {
            webModel.findByIdAndUpdate(
              id,
              {
                Bookmarks: [...data.Bookmarks, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                if (data) {
                  signupModel.findOne({ name: username }, (err, data) => {
                    if (err) return res.status(500).json(err);
                    if (data) {
                      signupModel.findOneAndUpdate(
                        { name: username },
                        {
                          Bookmarks: [...data.Bookmarks, ...statusArr],
                        },
                        (err, data) => {
                          if (err) return res.status(500);
                          if (data) {
                            res.status(200).json(data);
                          }
                        }
                      );
                    }
                  });
                }
              }
            );
            return;
          } else if (req.body.feedback) {
            webModel.findByIdAndUpdate(
              id,
              {
                comments: [...data.comments, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          }
        }
      });
    } else if (courseName === "Forex") {
      forexModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data) {
          if (req.body.like) {
            forexModel.findByIdAndUpdate(
              id,
              {
                likes: [...data.likes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.dislike) {
            forexModel.findByIdAndUpdate(
              id,
              {
                dislikes: [...data.dislikes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.viewed) {
            forexModel.findByIdAndUpdate(
              id,
              {
                views: [...data.views, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.bookmarked) {
            forexModel.findByIdAndUpdate(
              id,
              {
                Bookmarks: [...data.Bookmarks, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                if (data) {
                  signupModel.findOne({ name: username }, (err, data) => {
                    if (err) return res.status(500).json(err);
                    if (data) {
                      signupModel.findOneAndUpdate(
                        { name: username },
                        {
                          Bookmarks: [...data.Bookmarks, ...statusArr],
                        },
                        (err, data) => {
                          if (err) return res.status(500);
                          if (data) {
                            res.status(200).json(data);
                          }
                        }
                      );
                    }
                  });
                }
              }
            );
            return;
          } else if (req.body.feedback) {
            forexModel.findByIdAndUpdate(
              id,
              {
                comments: [...data.comments, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          }
        }
      });
    } else if (courseName === "Cryptocurrency") {
      cryptocurrencyModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data) {
          if (req.body.like) {
            cryptocurrencyModel.findByIdAndUpdate(
              id,
              {
                likes: [...data.likes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.dislike) {
            cryptocurrencyModel.findByIdAndUpdate(
              id,
              {
                dislikes: [...data.dislikes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.viewed) {
            cryptocurrencyModel.findByIdAndUpdate(
              id,
              {
                views: [...data.views, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.bookmarked) {
            cryptocurrencyModel.findByIdAndUpdate(
              id,
              {
                Bookmarks: [...data.Bookmarks, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                if (data) {
                  res.status(200).json(data);
                }
              }
            );
            return;
          } else if (req.body.feedback) {
            cryptocurrencyModel.findByIdAndUpdate(
              id,
              {
                comments: [...data.comments, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          }
        }
      });
    } else if (courseName === "Blockchain") {
      blockchainModel.findById(id, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data) {
          if (req.body.like) {
            blockchainModel.findByIdAndUpdate(
              id,
              {
                likes: [...data.likes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.dislike) {
            blockchainModel.findByIdAndUpdate(
              id,
              {
                dislikes: [...data.dislikes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.viewed) {
            blockchainModel.findByIdAndUpdate(
              id,
              {
                views: [...data.views, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.bookmarked) {
            blockchainModel.findByIdAndUpdate(
              id,
              {
                Bookmarks: [...data.Bookmarks, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                if (data) {
                  res.status(200).json(data);
                }
              }
            );
            return;
          } else if (req.body.feedback) {
            blockchainModel.findByIdAndUpdate(
              id,
              {
                comments: [...data.comments, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          }
        }
      });
    } else if (courseName === "Music") {
      musicModel.findById(id, (err, data) => {
        if (err) return res.staus(500).json(err);
        if (data) {
          if (req.body.like) {
            musicModel.findByIdAndUpdate(
              id,
              {
                likes: [...data.likes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.dislike) {
            musicModel.findByIdAndUpdate(
              id,
              {
                dislikes: [...data.dislikes, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.viewed) {
            musicModel.findByIdAndUpdate(
              id,
              {
                views: [...data.views, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          } else if (req.body.bookmarked) {
            musicModel.findByIdAndUpdate(
              id,
              {
                Bookmarks: [...data.Bookmarks, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                if (data) {
                  res.status(200).json(data);
                }
              }
            );
            return;
          } else if (req.body.feedback) {
            musicModel.findByIdAndUpdate(
              id,
              {
                comments: [...data.comments, ...statusArr],
              },
              (err, data) => {
                if (err) return res.status(500).json(err);
                res.status(200).json(data);
              }
            );
            return;
          }
        }
      });
    } else {
      return res.status(404);
    }
  },
};
