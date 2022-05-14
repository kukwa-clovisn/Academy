const express = require('express')
const courseController = require('../controllers/courseController')

const router = express.Router()

router.get('/:id', courseController.get);
router.post('/', courseController.post)

module.exports = router;