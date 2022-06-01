const express = require('express');

const userDataController = require('../controllers/todoController.js');

const router = express.Router();

router.get('/:id', userDataController.get);

router.post('/:id', userDataController.post);

router.post('/user/:id', userDataController.user);

router.post('/image/:id', userDataController.user);



module.exports = router;