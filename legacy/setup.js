const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('gallery.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS photos (id INTEGER PRIMARY KEY, filename TEXT, title TEXT)");

  const files = fs.readdirSync('./gallery-images');
  files.forEach(file => {
    db.run("INSERT INTO photos (filename, title) VALUES (?, ?)", [file, file]);
  });

  console.log("✅ Image filenames inserted into SQLite!");
  db.close();
});
