const Product = require("../../models/product/Product")

const readSingleProduct = async(req,res) => {
    try {
        console.log(req.params);
        const response = await Product.findOne(req.params);
        
        response.thumbnail = `${req.protocol}://${req.get('host')}/uploads/${response.thumbnail}`;

        response.images = `${req.protocol}://${req.get('host')}/uploads/${response.images}`;

        if (!response) return res.status(404).json({message: 'data not found'});
        res.status(200).json({message :'data fetched successfully', data: response})

    } catch (error) {
        console.log(error)
        res.status(500).json({message :'internal server error'})
    }
} 

module.exports = readSingleProduct;