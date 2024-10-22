const Admin = require("../../models/admin/admin");
const JWT = require('jsonwebtoken')

require('dotenv').config();

const adminLogin = async(req,res) => {
    try {
        // console.log(req.body)
        const ifMail = await Admin.findOne({mail : req.body.mail});
        if (!ifMail) return res.status(404).json({message : 'invalid mail'})

        if(ifMail.password !== req.body.password) return res.status(401).json({message : 'invalid password'})

        //remove passwd from ifmail and rest is admindata.
        //... = rest operator (catch remaining data)
        const {password, ...admindata} = ifMail._doc; //actual obj inside of ._doc

                //data      //key               //expiry optional       //callback fn
        JWT.sign({ifMail}, process.env.JWT_KEY, {expiresIn: 60*60*24*7}, (error,token)=>{

            if (error) res.status(500).json({message : 'error in login'});

            // Set the token in a cookie
            // res.cookie('auth', token, {
            //     httpOnly: true, // Makes the cookie inaccessible to JavaScript on the client side for security
            //     // secure: process.env.NODE_ENV === 'production', // Ensure it's only sent over HTTPS in production
            //     maxAge: 60 * 60 * 24 * 7 * 1000 // Set expiration time (7 days)
            // });
            
            res.status(200).json({message : 'admin logged in successfully', data: admindata, auth: token});
         })   
                   
    } catch (error) {
        res.status(500).json({message : 'internal server error'})
        console.log(error)
    }
};

module.exports = adminLogin;