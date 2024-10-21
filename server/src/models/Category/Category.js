const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName : {
        type: String,
        required: true,
        unique: true, // Ensures that each category is unique
        trim: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

// Check if the model already exists
const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = Category;