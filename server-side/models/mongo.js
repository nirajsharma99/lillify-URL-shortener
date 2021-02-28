//const { Number, Int32 } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/lillifyapp',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error) => {
    if (!error) {
      console.log('Database connected');
    } else {
      console.log('Error connecting to database.');
    }
  }
);

var lillifySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  url: { type: String, required: true },
  hash: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

var lillify = (module.exports = mongoose.model('lillify', lillifySchema));
