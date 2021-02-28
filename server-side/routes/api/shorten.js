const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const lillify = require('../../models/mongo');

router.get('/test', (req, res) => res.send('api working'));

router.post('/', (req, res) => {
  console.log(req.body);
  const urlData = req.body.url;
  //check if url already exist
  lillify.findOne({ url: urlData }, (err, doc) => {
    if (doc) {
      console.log('entry found in db');

      res.send({
        url: urlData,
        hash: doc._id,
        status: 200,
        statusTxt: 'old',
        date: doc.date,
      });
    } else {
      console.log('new url');
      const webaddress = new lillify({
        _id: uniqid(),
        url: urlData,
      });
      webaddress.save((err) => {
        if (err) {
          return console.error(err);
        }
        res.send({
          url: urlData,
          hash: webaddress._id,
          status: 200,
          statusTxt: 'new',
          date: webaddress.date,
        });
      });
    }
  });
});
module.exports = router;
