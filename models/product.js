const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    price: { type: Number, required: true },
});

const Product =  mongoose.model('Product', productsSchema);

module.exports = Product;