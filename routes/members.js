const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// members.json からデータを読み取り、返す API
router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/members.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading members.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    const members = JSON.parse(data);
    res.json(members);
  });
});

module.exports = router;
