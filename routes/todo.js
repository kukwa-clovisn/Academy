const express = require('express');

const userDataController = require('../controllers/todoController.js');

const router = express.Router();

router.get('/:id', userDataController.get);

router.post('/:id', userDataController.post);



module.exports = router;