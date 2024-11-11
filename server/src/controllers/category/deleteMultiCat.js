const Category = require("../../models/category/Category")

const deleteMultiCat = async(req,res) => {
    // In MongoDB, the $in operator is used to match any of the values specified in an array against a field. It's commonly used in queries to check if a field's value is included in a specified array of values

    // $in: req.body: The $in operator is checking if the _id of each document in SubCategory matches any of the IDs provided in req.body.
    try {
        const oldData = await Category.find({_id:{$in: req.body}})
        // console.log(oldData)
        
        const response = await Category.deleteMany({_id: {$in: req.body}})
        res.status(200).json({message :'data deleted successfully', response})
    } catch (error) {
        console.log(error)
        res.status(500).json({message :'internal server error'})        
    }
}

module.exports = deleteMultiCat;