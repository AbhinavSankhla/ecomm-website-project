const mongoose = require('mongoose');
const Category = require('../Category/Category');
const SubCategory = require('../Category/SubCategory'); 

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    full_description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    mrp: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    occasion: {
        type: String,
        required: true,
        trim: true
    },
    fit: {
        type: String,
        required: true,
        trim: true
    },
    fabric: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Category model
        ref: 'Category',
        required: true
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId, // Reference to SubCategory model
        ref: 'SubCategory',
        required: true
    },
    size: {
        type: [String], // Array of sizes
        required: true,
        enum: ['xs', 's', 'm', 'l', 'xl', 'xxl'] // Adjust sizes as needed
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    status: {
        type: Boolean,
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

// Update the updated_at field before saving
productSchema.pre('save', function (next) {
    this.updated_at = Date.now(); // Note: Fixed to match your field name
    next();
});

// Check if the model already exists
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;