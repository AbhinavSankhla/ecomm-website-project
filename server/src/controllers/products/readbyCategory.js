const mongoose = require('mongoose');
const Product = require("../../models/product/Product");

const readbyCategory = async (req, res) => {
    try {
        // Fetch category from query parameters
        const { category, subcategory} = req.query;
        console.log(category, subcategory);

           // Build the query dynamically
           const query = { status: true }; // Include status: true in the query

           // Ensure category is being passed correctly and is a valid ObjectId
           if (category && mongoose.Types.ObjectId.isValid(category)) {
               query.category = new mongoose.Types.ObjectId(category); // Convert to ObjectId using 'new'
           }
        
           else if (subcategory) {
            query.subcategory = new mongoose.Types.ObjectId(subcategory);
            }

           else {
               console.error("Invalid ID");
               return res.status(400).json({ message: 'Invalid category ID' });
           }

        // console.log("Query Object:", query);
        //     if (subcategory) {
        //     query.subcategory = new mongoose.Types.ObjectId(subcategory);
        // }

        // Fetch products based on the query
        const response = await Product.find(query);
        
        const filepath = `${req.protocol}://${req.get('host')}/uploads`;

        // Return the filtered data
        res.status(200).json({
            message: 'Data fetched successfully',
            data: response,
            filepath,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = readbyCategory;