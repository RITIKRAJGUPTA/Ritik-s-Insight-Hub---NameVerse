const fs = require('fs');
const path = require('path');

exports.getPhotos = (req, res) => {
  const uploadsDir = path.join(__dirname, '..', 'uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to load images' });
    }

    // Filter images and videos only
    const images = files.filter(file => /\.(jpg|jpeg|png|gif|mp4|mov)$/i.test(file));

    // Create public URLs
    const imageUrls = images.map(filename => `${req.protocol}://${req.get('host')}/uploads/${filename}`);

    res.json({ success: true, images: imageUrls });
  });
};
