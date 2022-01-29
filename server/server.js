const express = require('express');
const path = require('path');

const app = express();

//global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

//app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, err) => {
  if (err) {
    console.log('there is an error');
  }
  return res.status(200).send('Hello from the server!');
});








app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
