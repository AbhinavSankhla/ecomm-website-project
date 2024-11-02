const Category = require("../../models/Category/Category");

const searchCategory = async(req,res) =>{
    try {

        const response = await Category.find({$or: [
            {categoryName: {$regex: new RegExp(req.params.key, "i")}},
        ]});

        console.log(response)
        res.status(200).json({message : 'data fetched successfully', data: response})   

    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'internal server error'})
    }
}

module.exports = searchCategory;