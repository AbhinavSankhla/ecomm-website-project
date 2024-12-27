const mongoose = require('mongoose');
const Category = require('./Category');

const SubCategorySchema = new mongoose.Schema({
    subCatName: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: Boolean,
        required: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,  //This is called foreign key.
        ref: 'Category', // Reference to the Category collection
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },
    
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Check if the model already exists
const SubCategory = mongoose.models.SubCategory || mongoose.model('SubCategory', SubCategorySchema);

module.exports = SubCategory;