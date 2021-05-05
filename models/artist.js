const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {type: String, required: true},
    genre: {type: String, required: false},
    date: {type: Date, required: false},
    venue: {type: String, required: false},
    city: {type: String, required: false},
    rating: {type: String, required: false},
    thoughts: {type: String, required: false}
  }, {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password;
        return ret;
      }
    }
  });

  module.exports = mongoose.model('Artist', artistSchema);