const mongoose = require('mongoose');
const Category = require('./Category');

const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensures that each subcategory is unique
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to the Category model
        required: true
    }
});

// Check if the model already exists
const SubCategory = mongoose.models.SubCategory || mongoose.model('SubCategory', SubCategorySchema);

module.exports = SubCategory;
