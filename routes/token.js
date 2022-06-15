const express = require("express");
const { user } = require("../controllers/todoController");

const tokenController = require("../controllers/tokenController");

const router = express.Router();

router.get("/", tokenController);

module.exports = router;
