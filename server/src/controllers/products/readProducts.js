const Product = require("../../models/product/Products");

const readProducts = async(req,res) =>{
    try {
        const response = await Product.find();
        const filepath = `${req.protocol}://${req.get('host')}/uploads`;

        res.status(200).json({message: 'data fetched successfully', data: response, filepath: filepath})              
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readProducts;