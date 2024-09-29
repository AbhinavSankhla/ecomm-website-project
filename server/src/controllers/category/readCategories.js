const Category = require("../../models/Category/Category");

const readCategory = async(req,res) =>{
    try {
        const response = await Category.find();

        res.status(200).json({message: 'data fetched successfully', data: response, filepath: filepath})              
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readCategory;