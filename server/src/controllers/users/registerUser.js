const User = require("../../models/user/user")
const otpSaver = require("../../support/otpdata/otpMap")

const registerUser = async(req,res) =>{
    try {
        console.log(req.body)
        const sentOtp = otpSaver.get(req.body.email)
        
        if(!req.body.otp) return res.status(400).json({message : 'please provide a otp'})
        if( String(req.body.otp) !== String(sentOtp)) return res.status(400).json({message : 'please provide a valid otp'})   

        const userdata = new User({
            email: req.body.email,
            password: req.body.password 
        })

        const response = await userdata.save();

        //sends only user email not password
        const {password, ...filteredResponse} = response._doc

        res.status(200).json({message : 'user register successfully', data: filteredResponse})
        otpSaver.delete(req.body.email);
    }

    catch (error) {
        console.log(error)
        if(error.code === 11000) return res.status(409).json({message: 'user already exists'});
        res.status(500).json({message : 'something went wrong'})        
    }
}

module.exports = registerUser

// const User = require("../../models/user/user");
// const otpSaver = require("../../support/otpdata/otpMap");

// const registerUser = async (req, res) => {
//   try {
//     console.log(req.body);
//     const sentOtp = otpSaver.get(req.body.email);

//     if (!req.body.otp) {
//       return res.status(400).json({ message: "Please provide an OTP" });
//     }

//     if (String(req.body.otp) !== String(sentOtp)) {
//       return res.status(400).json({ message: "Please provide a valid OTP" });
//     }

//     // Save the user in the database
//     const userdata = new User({
//       email: req.body.email,
//       password: req.body.password,
//     });

//     const response = await userdata.save();

//     // Omit the password in the response
//     const { password, ...filteredResponse } = response._doc;

//     // Set the cookie with user data (e.g., email and ID)
//     res.cookie("user-data", JSON.stringify(filteredResponse), {
//       httpOnly: true, // Prevents client-side JavaScript access
//       secure: false, // Set to true in production (HTTPS)
//       sameSite: "lax", // Adjust for third-party requests if needed
//       maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expires in 7 days
//     });

//     // Send success response
//     res.status(200).json({
//       message: "User registered successfully",
//       data: filteredResponse,
//     });

//     // Delete the OTP after successful registration
//     otpSaver.delete(req.body.email);
//   } catch (error) {
//     console.log(error);
//     if (error.code === 11000) {
//       return res.status(409).json({ message: "User already exists" });
//     }
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// module.exports = registerUser;
