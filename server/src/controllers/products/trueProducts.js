const Product = require("../../models/product/Product");

const trueProducts = async(req,res) =>{
    try {
        const product = await Product.find({status : true});
        const filepath = `${req.protocol}://${req.get('host')}/uploads`;
        
        res.status(200).json({message : "data fetched successfully", data: product, filepath});
        
    } catch (error) {
        res.status(500).json({message : "internal server error"});
        console.log(error)
    }
}

module.exports = trueProducts;