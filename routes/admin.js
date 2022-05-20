const express = require('express');

const adminController = require('../controllers/adminController');


const router = express.Router();

router.post('/add', adminController.add);

router.post('/auth', adminController.auth);

router.post('/contact', adminController.contact);

router.post('/blog', adminController.blog);

router.post('/send', adminController.send);

module.exports = router;