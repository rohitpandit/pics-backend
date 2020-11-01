const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const user = require('./routes/user');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', user);

app.all('*', (req, res) => {
  res.send('404, page not found!');
});

const port = 5000;

app.listen(port, () => {
  console.log('app listening at port :' + port);
});
