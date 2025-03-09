const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const membersRouter = require('./routes/members');

// API ルート（例：/api/members）の設定
app.use('/api/members', membersRouter);

// ビルド済みの React ファイルを静的ファイルとして提供
app.use(express.static(path.join(__dirname, 'client/build')));

// すべてのリクエストに対して index.html を返す（React Router 対応）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
