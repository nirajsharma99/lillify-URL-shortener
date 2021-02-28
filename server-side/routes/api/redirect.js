const express = require('express');
const router = express.Router();
const lillify = require('../../models/mongo');

router.get('/test', (req, res) => res.send('api is working'));

router.get('/', (req, res) => {
  const hash = req.headers.hash;
  lillify
    .findOne({ _id: hash })
    .then((doc) => {
      return res.json({ url: doc.url });
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ error: 'Sorry, this link may have expired.' });
    });
});
module.exports = router;
