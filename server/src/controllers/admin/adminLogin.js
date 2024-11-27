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
        const {password, ...adminData} = ifMail._doc; //actual obj inside of ._doc

        //         //data      //key               //expiry optional       //callback fn
        JWT.sign({ifMail}, process.env.JWT_KEY, {expiresIn: 60*60*24*7}, (error,token)=>{

            if (error) res.status(500).json({message : 'error in login'}); 
            
            res.status(200).json({message : 'admin logged in successfully', data: adminData, auth: token});
         })                      
    } catch (error) {
        res.status(500).json({message : 'internal server error'})
        console.log(error)
    }
};

module.exports = adminLogin;










// JWT.sign(
        //     { ifMail },
        //     process.env.JWT_KEY,
        //     { expiresIn: 60 * 60 * 24 * 7 }, // Expires in 7 days
        //     (error, token) => {
        //       if (error) return res.status(500).json({ message: "Error in login" });
      
        //       // Set token in cookies
        //       res.cookie("admin", token, {
        //         httpOnly: true, // Prevent access via JavaScript
        //         secure: false, // Set to true in production (HTTPS)
        //         sameSite: "lax", // Control third-party cookie behavior
        //         maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        //       });
      
        //       // Send response
        //       res.status(200).json({
        //         message: "Admin logged in successfully",
        //         data: adminData,
        //       });
        //     }
        //   );