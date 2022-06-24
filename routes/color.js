const express = require("express");

const colorController = require("../controllers/colorController.js");

const router = express.Router();

router.get("/:status", colorController.get);

router.post("/", colorController.post);

module.exports = router;
