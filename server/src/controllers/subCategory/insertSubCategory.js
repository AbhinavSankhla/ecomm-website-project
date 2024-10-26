const SubCategory = require("../../models/category/SubCategory");

const insertSubCategory = async (req, res) => {
    try {
        console.log(req.body);
        const { subCatName, category, status } = req.body;

        // const existingSubCategory = await SubCategory.findOne({ subCatName, category, status });
        // if (existingSubCategory) {
        //     return res.status(400).json({ message: 'SubCategory already exists' });
        // }

        const dataToInsert = new SubCategory({ subCatName, category, status });
        const response = await dataToInsert.save();

        res.status(200).json({ message: 'subcategory inserted successfully', data: response });
    }
     
    catch (error) {
        res.status(500).json({ message: 'internal server error' });
        console.log(error);
    }
}

module.exports = insertSubCategory;
