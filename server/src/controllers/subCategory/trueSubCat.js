// const SubCategory = require("../../models/category/SubCategory");

// const trueSubCat = async(req,res) =>{
//     try {
//         const category = await SubCategory.find({status : true});
//         res.status(200).json({message : "data fetched successfully", data: category});
        
//     } catch (error) {
//         res.status(500).json({message : "internal server error"});
//         console.log(error)
//     }
// }
// module.exports = trueSubCat;

const SubCategory = require("../../models/category/SubCategory");

const trueSubCat = async (req, res) => {
    try {
        // Get category from query parameters
        const { category } = req.query;

        // Check if category is provided, then filter subcategories by it
        const filter = { status: true };
        if (category) {
            filter.category = category;
        }
        // Fetch filtered subcategories
        const subCategory = await SubCategory.find(filter);
        res.status(200).json({ message: "Data fetched successfully", data: subCategory });
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
};

module.exports = trueSubCat;