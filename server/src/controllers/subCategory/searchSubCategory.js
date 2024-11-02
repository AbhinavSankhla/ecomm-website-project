const SubCategory = require("../../models/Category/SubCategory");

const searchSubCategory = async(req,res) =>{
    try {
        // console.log(req.params);
        // The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>.

        const response = await SubCategory.find({$or: [
            //here $regex is not a pattern its a feature of node.js to match
            // {subCatName: {$regex:req.params.key}} //it match only full input eg(p and php)

            //here we make pattern which return if any keyword match
            {subCatName: {$regex: new RegExp(req.params.key, "i")}} //i flag make search case-insensitive.
        ]});

        console.log(response)
        res.status(200).json({message : 'data fetched successfully', data: response})   

    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'internal server error'})
    }
}

module.exports = searchSubCategory;