const Aboutus = require("../../models/aboutus/aboutus");
const fs = require("fs");
const path = require("path");

const deleteAboutData = async(req,res) =>{
    try 
    {
        const response = await Aboutus.findOneAndDelete();

        if(response === null) return res.status(404).json({message: 'id does not exist'})
        // or if(!response) return....    
 
        //return true or false if file exist.(when it assign in var and console)    
        if(fs.existsSync(path.join('src', 'uploads', response.img1))){
            fs.unlinkSync(path.join('src', 'uploads', response.img1))
        };
    
        if(fs.existsSync(path.join('src', 'uploads', response.img2))){
            fs.unlinkSync(path.join('src', 'uploads', response.img2))
        };
        
        if(fs.existsSync(path.join('src', 'uploads', response.img3))){
            fs.unlinkSync(path.join('src', 'uploads', response.img3))
        };

        res.status(200).json({message: 'data deleted successfully', data:response})
    } 
    catch (error) 
    {
        console.log(error)
        if(error.reason) return res.status(400).json({message: 'invalid product id'}) 
        res.status(500).json({message: 'internal server error'})
    }
}

module.exports = deleteAboutData;