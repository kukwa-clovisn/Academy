// getting dependencies
const express = require("express");
const compression = require("compression");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const { expressCspHeader, INLINE, NONE, SELF } = require("express-csp-header");

const app = express();
// compressing the app into smalle chunks
app.use(compression());

// getting the enviroment variables
const port = process.env.PORT || 9002;
mongo_uri = process.env.MONGO_URI;

// database connect and models

// custom middlewares
app.use(bodyParser.json());
app.use(logger("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(
  expressCspHeader({
    directives: {
      "default-src": [NONE],
      "script-src": [SELF, INLINE],
      "style-src": [SELF],
      "img-src": [SELF],
      "worker-src": [NONE],
    },
  })
);

// express will send header "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' somehost.com; style-src 'self' mystyles.net; img-src data: images.com; workers-src 'none'; block-all-mixed-content; report-uri https://cspreport.com/send;'

// database connect and models
// const connectDb = require("./connectDB/connectDB");

//  Route paths
const signupRoute = require("../routes/signup");
const signinRoute = require("../routes/signin");
const userRoute = require("../routes/user");
const tokenRoute = require("../routes/token");
const adminRoute = require("../routes/admin");
const postRoute = require("../routes/post");
const todoRoute = require("../routes/todo");
const forget_passwordRoute = require("../routes/forget_password");
const registerRoute = require("../routes/register");

// getting Routes
app.use("/api/signup", signupRoute);
app.use("/api/signin", signinRoute);
app.use("/api/user", userRoute);
app.use("/api/token", tokenRoute);
app.use("/api/admin", adminRoute);
app.use("/api/post", postRoute);
app.use("/api/todo", todoRoute);
app.use("/api/forget_password", forget_passwordRoute);
app.use("/api/register", registerRoute);

// utils or plugin for adding collections to the database;
const dbUpdate = require("../utils/DB");
// dbUpdate();
/**
 * for app production
 */

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "/public/"));

  // handling client page routing
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname, "/public/index.html");
  });
}

module.exports = app;
