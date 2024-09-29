const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensures that each category is unique
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;