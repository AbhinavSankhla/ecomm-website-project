const JWT = require("jsonwebtoken");
require('dotenv').config()

//middleware
const verifyJWT = (req,res,next) => {
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1]
    
    if(!token) return res.status(400).json({message : 'please login'})
    
    //pass three parameters
    JWT.verify(token,process.env.JWT_key,(error,decode)=>{
        if(error) return res.status(400).json({message : 'invalid token'})
        next();  //send user to controller    
    })
};

module.exports = verifyJWT;