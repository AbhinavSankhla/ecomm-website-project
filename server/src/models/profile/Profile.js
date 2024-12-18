const mongoose = require('mongoose'); 

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    facebook: {
        type: String,
        required: true,
        trim: true
    },
    insta: {
        type: String,
        required: true,
        trim: true
    },
    youtube: {
        type: String,
        required: true,
        trim: true
    },
    x: {
        type: String,
        required: true,
        trim: true
    },
    whatsapp: {
        type: String,
        required: true,
        min: 0
    },
    contactnum: {
        type: String,
        required: true,
        min: 0
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    },

    weekday_time: {
        type: String,
        required: true,
        trim: true
    },

    weekend_time: {
        type: String,
        required: true,
        trim: true
    },

    about_heading: {
        type: String,
        required: true,
        trim: true
    },

    about_para1: {
        type: String,
        required: true,
        trim: true
    },

    about_para2: {
        type: String,
        required: true,
        trim: true
    },

    thumbnail: {
        type: String,
        required: true
    },

    logo: {
        type: String,
        required: true
    },

    favicon: {
        type: String,
        required: true
    },

    profilepic: {
        type: String,
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

profileSchema.pre('save', (next) => {
    this.updated_at = Date.now();
    next();
});

// Check if the model already exists
const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);

module.exports = Profile;