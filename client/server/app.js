// getting dependencies
const express = require("express");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require('mongoose')

const app = express();

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
          origin: "*"
     })
);

// database connect and models
const connectDb = require('./connectDB/connectDB');
connectDb(mongo_uri);

//  Route paths
const signupRoute = require('./routes/signup')
const signinRoute = require('./routes/signin')
const courseRoute = require('./routes/course')
const tokenRoute = require('./routes/token')
const adminRoute = require('./routes/admin')
const postRoute = require('./routes/post')

// getting Routes
app.use('/signup', signupRoute);
app.use('/signin', signinRoute);
app.use('/course', courseRoute);
app.use('/token', tokenRoute);
app.use('/admin', adminRoute);
app.use('/post', postRoute);

// exporting the app.
module.exports = app;