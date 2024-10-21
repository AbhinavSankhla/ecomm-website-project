const Admin = require("../../models/admin/admin")
require('dotenv').config()

//flag register to prevent request-res to hit server again n again 
let ifRegistered = false;

//it is function does'nt attached with api
const registerAdmin = async() => {

    if(ifRegistered) return;

    const ifAdmin = await Admin.find();

    if(ifAdmin.length !== 0) return console.log(ifAdmin[0]);

    let mail = process.env.ADMIN_EMAIL;
    let password = process.env.ADMIN_PASSWORD

    if(!mail || !password) return console.log('please set ADMIN_EMAIL & ADMIN_PASSWORD in .env file');
        
    const adminData = new Admin({
        mail,
        password
    })

    const response = await adminData.save();
    console.log(response)

    ifRegistered = true;
}

module.exports = registerAdmin;