const Product = require("../../models/product/Product");

const readProducts = async (req, res) => {
    try {
        // Fetch category from query parameters
        const { category } = req.query;

        // Build the query dynamically
        const query = {};
        if (category) {
            query.category = category; // Filter by category if provided
        }
        if (subcategory) {
            query.subcategory = subcategory; // Assuming subcategory is stored as a string in the product model
        }

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

module.exports = readProducts;
