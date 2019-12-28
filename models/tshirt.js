const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tshirtSchema = new Schema({
  name: String,
  brand: String,
  color: String,
  price: String,
  image: String,
  embroidery :   Boolean,
  madeInFrance: Boolean,
  size: String
});

const tshirtModel = mongoose.model("Tshirt", tshirtSchema);
module.exports = tshirtModel;
