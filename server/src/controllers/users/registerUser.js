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