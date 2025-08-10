const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const authMiddleware = require('../middleware/auth');

const adminController = require('../controllers/adminController');

// Multer setup to store files in 'uploads' folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});
const upload = multer({ storage });

// POST /api/admin/login
router.post('/login', adminController.login);

// POST /api/admin/upload (protected)
router.post('/upload', auth, upload.single('media'), adminController.uploadMedia);

router.post('/logout', authMiddleware, adminController.logout);

module.exports = router;
