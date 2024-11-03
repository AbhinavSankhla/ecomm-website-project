const Product = require("../../models/product/Product");
const fs = require("fs");
const path = require("path");

const updateProduct = async(req,res) =>{
    try 
    {
        //find console array and findOne console object.
        const ifExist = await Product.findOne(req.params)
        if(!ifExist) return res.status(404).json({message : 'data not found'})
        console.log(ifExist)                         

        const {name,
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
            } = req.body;

            const data = {
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
                size
            }

        // Validate category to ensure it’s a valid ObjectId or not empty
        // if (category && mongoose.isValidObjectId(category)) {
        //     data.category = category;
        // } else {
        //     return res.status(400).json({ message: 'Invalid category ID' });
        // }        

        // if(req.files && req.files.thumbnail !== undefined)
        if(req.files.thumbnail !== undefined){
            data.thumbnail = req.files.thumbnail[0].filename
            
            if(fs.existsSync(path.join('src', 'uploads', ifExist.thumbnail))){
                fs.unlinkSync(path.join('src', 'uploads', ifExist.thumbnail))
            };
        }

        if(req.files.images !== undefined){
            const images = req.files.images.map((imgData)=>{
                return imgData.filename
            });
            data.images = images;

            ifExist.images.forEach((img)=>{
                if(fs.existsSync(path.join('src', 'uploads', img))){
                    fs.unlinkSync(path.join('src', 'uploads', img))
                };  
            })
        }    

        const response = await Product.updateOne(req.params,{$set :data});
        // console.log(data)
        res.status(200).json({message : 'data updated successfully', data : response})                
    } 
    catch(error)
    {
        console.log(error)
        res.status(500).json({message : 'internal server error'})
    }
} 

module.exports = updateProduct;