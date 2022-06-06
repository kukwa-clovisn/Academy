const express = require('express');

const userDataController = require('../controllers/todoController.js');

const tokenAuth = require('../controllers/tokenController');

const multer = require('multer')

// setting up the multer =====================================================>
const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, "../server/uploads");
     },
     filename: function (req, file, cb) {
          cb(null, new Date().getTime() + file.originalname);
     },
});

const fileFilter = (req, file, cb) => {
     if (
          file.mimetype === "image/jpeg" ||
          file.mimetype === "image/png" ||
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/svg"
     ) {
          cb(null, true);
     } else {
          cb(null, false);
     }
};

const upload = multer({
     storage: storage,
     limits: {
          fileSize: 1024 * 1024,
     },
     fileFilter: fileFilter,
});

const router = express.Router();

router.get('/:id', tokenAuth, userDataController.get);

router.post('/:id', tokenAuth, userDataController.post);

router.post('/user/:id', tokenAuth, userDataController.user);

router.post('/upload/:id', tokenAuth, upload.single('file'), userDataController.upload);



module.exports = router;