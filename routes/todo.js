const express = require('express');

const userDataController = require('../controllers/todoController.js');

const tokenAuth = require('../controllers/tokenController');

const router = express.Router();

router.get('/:id', tokenAuth, userDataController.get);

router.post('/:id', tokenAuth, userDataController.post);

router.post('/user/:id', tokenAuth, userDataController.user);

router.post('/image/:id', tokenAuth, userDataController.user);



module.exports = router;