const Category = require("../../models/Category/Category");

const updateCategory = async(req,res) => {
    try {
        //find console array and findOne console object.
        const ifExist = await Category.findOne(req.params)
        if(!ifExist) return res.status(404).json({message : 'data not found'})
        // console.log(ifExist)
        const data = req.body;
           
        const response = await Category.updateOne(req.params,{$set :data});
        // console.log(data)
        res.status(200).json({message : 'data updated successfully', data : response})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'internal server error'})
    }
}
module.exports = updateCategory;