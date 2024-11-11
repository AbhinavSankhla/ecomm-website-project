const Product = require("../../models/product/Product");
const fs = require("fs");
const path = require("path");

const deleteMultiProduct = async(req,res) =>{
    try {
        const oldData = await Product.find({_id:{$in: req.body}})

        //delete thumbnail
        oldData.forEach((item)=>{
            if(item.thumbnail){
                const oldfilepath = path.join('src', 'uploads', item.thumbnail);
                if(fs.existsSync(oldfilepath)){
                    fs.unlinkSync(oldfilepath);
                }
            }

             // Delete images stored in array
             if (item.images && Array.isArray(item.images)) {
                item.images.forEach((image) => {
                    const imagePath = path.join('src', 'uploads', image);
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath);
                    }
                });
            }
        })
        
        const response = await Product.deleteMany({_id: {$in: req.body}})
        res.status(200).json({message :'data deleted successfully', response})
    } catch (error) {
        console.log(error)
        res.status(500).json({message :'internal server error'})        
    }
}

module.exports = deleteMultiProduct;