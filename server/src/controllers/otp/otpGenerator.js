const nodemailer = require('nodemailer');
const otpSaver = require('../../support/otpdata/otpMap');
require('dotenv').config();

//create transporter 
const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.ADMIN_MAIL,
        pass : process.env.ADMIN_APP_PASSWORD
    }
});

const otpGenerator = async (req, res) => {
    try {
        // console.log(req.body)
        const { email } = req.body;
        // Generate a 6-digit OTP
        const otp = String(Math.floor(100000 + Math.random() * 900000)); // Ensures a number between 100000 and 999999

        otpSaver.set(email, otp)


        // console.log(otp, email);
        // console.log(process.env.ADMIN_MAIL, process.env.ADMIN_APP_PASSWORD);

        const options = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'OTP - BeClothing',
            // text: `your otp is ${otp}`
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }
        .container{
            max-width: 800px;
            margin: auto;
          
            padding: 20px;
        }
        span{
            font-weight: 800;
            font-size: 22px;
            font-style: italic;
        }

        img {
            width: 400px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to BeClothing</h1>
        <p>
            Thank you for registration.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores quisquam sapiente cupiditate. Magni, temporibus quia ipsam distinctio quod, quae labore quam reiciendis vel omnis repellendus natus architecto error autem.
        </p>
        <p></p>
        <p>
            Your one time password is <span>${otp}</span>
        </p>
        <p></p> 
        <p>
            Don't share your otp
        </p>
    </div>
</body>
</html>`
        };

        transporter.verify(function (error, success) {
            if (error) {
                console.error("Transporter Error:", error);
            } else {
                console.log("Server is ready to send emails");
            }
        });

        await transporter.sendMail(options, (error, success)=>{
            if (error) return res.status(501).json({ message: 'something went wrong'});
            // console.log(success)
            res.status(200).json({ message: 'OTP sent to your mail' });

        }); 
        // console.log(otpSaver.get(email)); 


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

module.exports = otpGenerator;