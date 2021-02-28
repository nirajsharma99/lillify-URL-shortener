const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const lillify = require('./models/mongo');

const shorten = require('./routes/api/shorten');
const redirect = require('./routes/api/redirect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-type,Accept'
  );
  next();
});

app.get('/:hash', (req, res) => {
  const id = req.params.hash;
  console.log(id);
  lillify.findOne({ _id: id }, (err, doc) => {
    if (doc) {
      console.log(doc);
      res.redirect('http://' + doc.url);
    } else {
      res.redirect('/');
    }
  });
});

app.use('/api/shorten', shorten);
app.use('./api/redirect', redirect);
app.get('/', (req, res) => {
  res.send('hello world');
});
app.listen(port, () => console.log(`server is running on port ${port}`));
