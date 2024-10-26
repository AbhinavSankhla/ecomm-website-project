const Category = require("../../models/Category/Category");

const trueCategory = async(req,res) =>{
    try {
        const category = await Category.find({status : true});
        res.status(200).json({message : "data fetched successfully", data: category});
        
    } catch (error) {
        res.status(500).json({message : "internal server error"});
        console.log(error)
    }
}

module.exports = trueCategory;