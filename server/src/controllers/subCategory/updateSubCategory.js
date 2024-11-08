const SubCategory = require("../../models/Category/SubCategory");

const updateSubCategory = async(req,res) => {
    try {
        //find console array and findOne console object.
        const ifExist = await SubCategory.findOne(req.params)
        if(!ifExist) return res.status(404).json({message : 'data not found'})
        // console.log(ifExist)        
        const data = req.body;

        console.log(data)
        console.log(req.params)
           
        const response = await SubCategory.updateOne(req.params,{$set :data});
        
        res.status(200).json({message : 'data updated successfully', data : response})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'internal server error'})
    }
}

module.exports = updateSubCategory;