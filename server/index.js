const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.end();
});

const PORT = 9001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})