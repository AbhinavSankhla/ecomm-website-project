const Product = require("../../models/product/Product");

const changeProductStatus = async(req,res) => {
    try {
        const response = await Product.updateOne(
            {
                _id: req.body.id
            },
            {
                $set: {
                    status: req.body.status,
                    updated_at: Date.now()
                }
            }
        );
        // console.log(req.body);
        res.status(200).json({message : 'status updated successfully', data: response})
    } catch (error) {
        res.status(500).json({message : 'internal server error'})
        console.log(error)
    }
}

module.exports = changeProductStatus;