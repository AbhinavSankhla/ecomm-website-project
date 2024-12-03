const Product = require("../../models/product/Product");
// const JWT = require("jsonwebtoken");
// require('dotenv').config()

const readProducts = async(req,res) =>{
    try {
        // const auth = req.headers.authorization; 
        // const token = auth.split(' ')[1]

        // if(!token) return res.status(400).json({message : 'please login'})
        const response = await Product.find();
        const filepath = `${req.protocol}://${req.get('host')}/uploads`;

        //pass three parameters
        // JWT.verify(token,process.env.JWT_key,(error,decode)=>{
        //     if(error) return res.status(400).json({message : 'invalid token'})
        //         res.status(200).json({message: 'data fetched successfully', data: response, filepath})
        // })

        res.status(200).json({message: 'data fetched successfully', data: response, filepath})
    }    
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readProducts;