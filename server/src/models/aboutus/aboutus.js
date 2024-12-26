const mongoose = require('mongoose');

const aboutusSchema = new mongoose.Schema({
    uppersection:{
        heading: {
            type: String,
            required: true,
            trim: true
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        content_1: {
            type: String,
            required: true,
            trim: true
        },
        content_2: {
            type: String,
            required: true,
            trim: true
        },
        subheading_sec1: {
            type: String,
            required: true,
            trim: true
        },
        content_3: {
            type: String,
            required: true,
            trim: true
        },
        content_4: {
            type: String,
            required: true,
            trim: true
        },
        img1: {
            type: String,
            required: true
        }
    },

    lowersection :{
        line1: {
            type: String,
            required: true,
            trim: true
        },
        subheading_sec2: {
            type: String,
            required: true,
            trim: true
        },
        content_5: {
            type: String,
            required: true,
            trim: true
        },
        content_6: {
            type: String,
            required: true,
            trim: true
        },
        img2: {
            type: String,
            required: true,
            trim: true
        },
        line2: {
            type: String,
            required: true,
            trim: true
        },
        subheading_sec3: {
            type: String,
            required: true,
            trim: true
        },
        content_7: {
            type: String,
            required: true,
            trim: true
        },
        content_8: {
            type: String,
            required: true
        },
        img3: {
            type: String,
            required: true,
            trim: true
        }
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

aboutusSchema.pre('save', (next) => {
    this.updated_at = Date.now();
    next();
});

// Check if the model already exists
const Aboutus = mongoose.models.Aboutus || mongoose.model('Aboutus', aboutusSchema);

module.exports = Aboutus;