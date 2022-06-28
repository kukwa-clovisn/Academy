const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const signupController = require("../controllers/signupController");

const router = express.Router();

router.post("/", signupController.post);

router.get("/subscription/:name", signupController.subscription);

module.exports = router;
