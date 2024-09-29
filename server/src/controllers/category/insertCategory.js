const Category = require("../../models/Category/Category");

const insertCategory = async(req,res) => {
    try {
        console.log(req.body)
        const {name} = req.body;

        // Check if the category already exists
        const existingCategory = await Category.findOne({name});
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }
         // Create a new category
        const dataToInsert = new Category({name})
        const response = await dataToInsert.save()

        res.status(200).json({message: 'category inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = insertCategory;