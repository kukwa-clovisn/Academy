const express = require('express');
const signinController = require('../controllers/signinController');


const router = express.Router()


router.post('/', signinController.post);



module.exports = router;