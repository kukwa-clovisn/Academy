const express = require('express');

const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.allposts);

router.get('/:title', postController.filterPost);


module.exports = router;