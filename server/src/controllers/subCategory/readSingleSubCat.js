const SubCategory = require("../../models/Category/SubCategory");

const readSingleSubCategory = async(req,res) => {
    try {
        const response = await SubCategory.findOne(req.params);
        if (!response) return res.status(404).json({message: 'data not found'});

        res.status(200).json({message :'data fetched successfully', data: response})

    } catch (error) {
        console.log(error)
        res.status(500).json({message :'internal server error'})
    }
} 

module.exports = readSingleSubCategory;