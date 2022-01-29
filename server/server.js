const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, err) => {
  if (err) {
    console.log('there is an error');
  }
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});








app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
