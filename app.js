const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  return res.send('Hello World!');
});

const newVersion = null ?? 'Does this make it fail?';

app.listen(3000);
