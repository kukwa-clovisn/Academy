const signupUserModel = require("../models/signupModel");

const capitalizeUserName = require("../middlewares/capitalize");

const jwt = require("jsonwebtoken");

const refreshTokenAuth = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  let [bearer, token] = authHeader.split(" ");

  if (token === null) {
    return res.status(401).json({
      msg: "Unauthorized user!",
    });
  }
  jwt.verify(token, process.env.user_login_token, (err, data) => {
    if (err) return res.status(403).json(err);

    if (!data)
      return res.status(403).json({
        msg: "token expired",
      });

    let userName = capitalizeUserName(data.username);
    signupUserModel
      .findOne(
        {
          username: userName,
        },
        (err, user) => {
          if (err) return res.status(500).json(err);
          next();
        }
      )
      .select("-password");
  });
};

module.exports = refreshTokenAuth;
