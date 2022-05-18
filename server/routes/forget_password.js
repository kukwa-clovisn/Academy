const express = require('express');

const forget_passwordController = require('../controllers/forget_passwordController');

const router = express.Router();

router.post('/', forget_passwordController.post);

module.exports = router;