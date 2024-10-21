const Category = require("../../models/category/Category");

const insertCategory = async(req,res) => {
    try {
        console.log(req.body)
        const{categoryName, status} = req.body;
        
        // Ensure categoryName is not null or empty
        if (!categoryName) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        // Convert status string to a Boolean
    // const booleanStatus = status === 'true' ? true : status === 'false' ? false : null;

    // if (booleanStatus === null) {
    //   return res.status(400).json({ message: 'Status is required' });
    // }

        // Check if the category already exists
        const existingCategory = await Category.findOne({categoryName, status});
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        // Create a new category
        const dataToInsert = new Category({categoryName, status})
        const response = await dataToInsert.save()

        res.status(200).json({message: 'category inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = insertCategory;