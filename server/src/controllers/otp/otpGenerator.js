const nodemailer = require('nodemailer')
require('dotenv').config();

//create transporter 
const transporter = nodemailer.createTransport({
    services : 'gmail',
    auth : {
        user : process.env.ADMIN_MAIL,
        pass : process.env.ADMIN_APP_PASSWORD
    }
});

const otpGenerator = async (req, res) => {
    try {
        const { email } = req.body;
        // Generate a 6-digit OTP
        const otp = String(Math.floor(100000 + Math.random() * 900000)); // Ensures a number between 100000 and 999999
        console.log(otp, email);

        const options = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'OTP for password reset',
            text: `Your OTP is ${otp}`,
        };
        // Here you can use a mailer service like nodemailer to send the email
        // await transporter.sendMail(options);
        res.status(200).json({ message: 'OTP sent to your mail' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = otpGenerator;