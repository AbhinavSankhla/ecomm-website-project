const SubCategory = require("../../models/category/SubCategory");

const readSubCategory = async(req,res) =>{
    try {
        const response = await SubCategory.find().populate('category');
        res.status(200).json({message: 'data fetched successfully', data: response})              
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readSubCategory;