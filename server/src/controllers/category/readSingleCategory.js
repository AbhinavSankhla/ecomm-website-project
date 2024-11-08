const Category = require("../../models/Category/Category");

const readSingleCategory = async(req,res) => {
    try {
        const response = await Category.findOne(req.params);
        if (!response) return res.status(404).json({message: 'data not found'});

        res.status(200).json({message :'data fetched successfully', data: response})

    } catch (error) {
        console.log(error)
        res.status(500).json({message :'internal server error'})
    }
} 

module.exports = readSingleCategory;