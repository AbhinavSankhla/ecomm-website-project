const Product = require("../../models/product/Product");

const insertProduct = async(req,res) => {
    try {
        const { name, description, full_description, price, mrp, discount, occasion, fit, fabric, weight, category, subcategory, stock, color, size, status}= req.body;

        // console.log(req.body);
        // console.log(req.files)

        const thumbnail = req.files.thumbnail[0].filename
        const images = req.files.images.map((imgData)=>{
            return imgData.filename;
        });
        //13 june 14:30
        const dataToInsert = new Product({
            name,
            description,
            full_description,
            price,
            mrp,
            discount,
            occasion,
            fit,
            fabric,
            weight,
            category,
            subcategory,
            stock,
            color,
            size,
            thumbnail,
            images,
            status
        })
 
        const response = await dataToInsert.save()
        res.status(200).json({message: 'product inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = insertProduct;