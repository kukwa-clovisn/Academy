const express = require('express');

const forget_passwordController = require('../controllers/forget_passwordController');

const router = express.Router();

router.post('/', forget_passwordController.post);
router.post('/token', forget_passwordController.token);
router.post('/update', forget_passwordController.update);

module.exports = router;