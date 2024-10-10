const mongoose = require('mongoose');
const category = require('../Category/Category');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim: true
    },

    description : {
        type : String,
        require : true,
        trim: true
    },

    full_description : {
        type : String,
        require : true,
        trim: true
    },

    price : {
        type : Number,
        require : true,
        min: 0
    },

    mrp : {
        type : Number,
        require : true
    },

    discount : {
        type : Number,
        require : true
    },

    occasion : {
        type : String,
        required : true,
        trim: true
    },

    fit : {
        type : String,
        required : true,
        trim: true
    },

    fabric : {
        type : String,
        required : true,
        trim: true
    },
    
    category: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Category model
        ref: 'Category', // Refers to the Category model
        required: true
    },

    subcategory: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Category model
        ref: 'SubCategory', // Refers to the Category model
        required: true
    },

    size: {
        type: [String], // Array of sizes
        required: true,
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] // Adjust sizes as needed
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
    
    thumbnail : {
        type : String,
        require : true
    },

    images : {
        type : Array,
        required : true
    },

    status : {
        type : Boolean,
        require : true
    },

    created_at : {
        type : Date,
        default : Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    }
});

productSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;