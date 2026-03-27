const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Open your SQLite DB
const db = new sqlite3.Database('./gallery.db');

// 🔹 Serve static image files from gallery-images/
app.use('/images', express.static(path.join(__dirname, 'gallery-images')));

// 🔹 API to return all image metadata from the database
app.get('/api/gallery', (req, res) => {
  db.all("SELECT * FROM photos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

// Optional: serve your gallery.html file (for testing)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'gallery.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
