const Product = require("../../models/product/Product");

const searchProduct = async(req,res) =>{
    try {

        const response = await Product.find({$or: [
            {name: {$regex: new RegExp(req.params.key, "i")}},
            {description: {$regex: new RegExp(req.params.key, "i")}},
            {full_description: {$regex: new RegExp(req.params.key, "i")}},
            //convert key into Number 
            // {price: {$regex: new RegExp(Number(req.params.key), "i")}}
        ]});

        console.log(response)
        res.status(200).json({message : 'data fetched successfully', data: response})   

    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'internal server error'})
    }
}

module.exports = searchProduct;