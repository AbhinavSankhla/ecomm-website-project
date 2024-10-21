const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    mail : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    }    
});

//in mongoose.model made collection 'admins' and configure adminschema with it.
const Admin = mongoose.model('admins',adminSchema);
module.exports = Admin;