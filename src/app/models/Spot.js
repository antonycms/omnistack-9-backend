const { model, Schema } = require('mongoose');

const Spot = new Schema({
  company: String,
  thumbnail: String,
  price: Number,
  techs: [],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

module.exports = model('Spot', Spot);
