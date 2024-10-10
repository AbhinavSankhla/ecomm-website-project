const mongoose = require('mongoose');
const Category = require('../Category/Category')

const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensures that each category is unique
        trim: true
    },
    
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to the Category model
        required: true
    }
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

module.exports = SubCategory;