const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1> Yay!!! Welcome to Parent Subtree.</h1>')
})


app.listen(4000, () => {
  console.log('Parent Subtree running at 4000');
})
