const mongoose = require('mongoose');

const PaletaSchema = new mongoose.Schema({
  flavor: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
});

const Paleta = mongoose.model('paletas', PaletaSchema);

module.exports = Paleta;
