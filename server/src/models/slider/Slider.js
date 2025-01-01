const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
    img1: {
        type: Array,
        required: true
    },
    img2: {
        type: Array,
        required: true
    },
    img3: {
        type: Array,
        required: true
    },
    img4: {
        type: Array,
        required: true
    },
    img5: {
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

sliderSchema.pre('save', (next) => {
    this.updated_at = Date.now();
    next();
});

// Check if the model already exists
const Slider = mongoose.models.Slider || mongoose.model('Slider', sliderSchema);

module.exports = Slider;