const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Admin login controller
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ success: false, message: 'Invalid username or password' });

    const validPassword = await bcrypt.compare(password, admin.passwordHash);
    if (!validPassword) return res.status(401).json({ success: false, message: 'Invalid username or password' });

    const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '4h' });

    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Admin upload controller
exports.uploadMedia = (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });

  // You can store file info in DB if needed

  res.json({ success: true, message: 'File uploaded', file: req.file.filename });
};

exports.logout = (req, res) => {
  // You can handle any server-side logout logic if needed (e.g., token blacklist)
  // For now, just respond success
  res.json({ success: true, message: 'Logged out successfully' });
};