const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    nameProduct: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    priceProduct: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

//Export the model
module.exports = mongoose.model('Product', productSchema);