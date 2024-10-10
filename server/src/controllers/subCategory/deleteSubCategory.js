const SubCategory = require("../../models/category/SubCategory");

const deleteSubCategory = async(req,res) =>{
    try {
        const response = await SubCategory.findOneAndDelete(req.params);

        if(response === null) return res.status(402).json({message: 'category id does not exist'})

        res.status(200).json({message : 'data deleted successfully'});
    } catch (error) {

        res.status(500).json({message : 'internal server error'});
        console.log(error)
    }
}

module.exports = deleteSubCategory;