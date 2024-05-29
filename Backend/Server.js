const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Other routes and server setup...

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
