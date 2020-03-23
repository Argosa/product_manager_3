const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have a title!"],
        minlength: [4, "Title must be four characters or more!"]
    },
    price: {
        type: String,
        required: [true, "You must enter a price!"]
    },
    description: {
        type: String,
        required: [true, "You must enter a description!"],
        minlength: [10, "Your description must be 10 characters or more!"]
    }
}, {timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);