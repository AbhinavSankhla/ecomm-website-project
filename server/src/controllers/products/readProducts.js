const Product = require("../../models/product/Product");
const JWT = require("jsonwebtoken");
require('dotenv').config()

const readProducts = async(req,res) =>{
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1]

        JWT.verify()

        const response = await Product.find();
        const filepath = `${req.protocol}://${req.get('host')}/uploads`;

        res.status(200).json({message: 'data fetched successfully', data: response, filepath})              
    }    
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readProducts;