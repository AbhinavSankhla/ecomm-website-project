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
        type: String,
        required: true,
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
        type: Date
    }
});

// Update the updated_at field before saving

// .pre is used to define pre-hooks (also called middleware) in Mongoose. These hooks allow you to run custom logic before certain actions take place in the database.
// For example:
// Before saving a document (save)
// Before updating a document (updateOne)
// Before querying (find)

productSchema.pre('save', (next) => {
    this.updated_at = Date.now();
    next();
});

// Check if the model already exists
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;