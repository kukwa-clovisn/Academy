const signupUserModel = require("../models/signupModel");

const capitalizeUserName = require("../middlewares/capitalize");

const verifyToken = require("../middlewares/verifyHash");

module.exports = {
  post: (req, res) => {
    let findUser = capitalizeUserName(req.body.username);

    signupUserModel.findOne(
      {
        username: findUser,
      },
      async (err, data) => {
        try {
          if (err) return res.status(500).json(err);

          // if the user is not logged in,
          if (!data)
            return res.status(403).json({
              msg: `user ${findUser} has no account. Make sure you sign up first`,
            });

          //    if data, check email
          if (data.email !== req.body.email) {
            return res
              .status(403)
              .json({ msg: "Registration failed. invalid credentials!" });
          }
          // if data, compare password,
          let result = await verifyToken(
            req.body.password,
            data.password,
            findUser
          );

          if (!result)
            return res.status(401).json({
              msg: "unauthorized user. Be sure you're signed up first",
            });

          let subs = data.subscription;
          for (let i = 0; i < subs.length; i++) {
            if (
              subs[i].plan === req.body.subscription.plan &&
              subs[i].course === req.body.subscription.course
            ) {
              return res
                .status(200)
                .json({ msg: "You're already registered for this course" });
            }
          }

          subs.push(req.body.subscription);

          await signupUserModel.findByIdAndUpdate(data._id, {
            subscription: subs,
          });
          return res
            .status(200)
            .json({ msg: "Registration completed. Redirecting to login...." });
        } catch (err) {
          return res.status(403).json(err);
        }
      }
    );
  },
};
