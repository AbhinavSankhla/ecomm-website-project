const Profile = require("../../models/profile/Profile");
const fs = require("fs");
const path = require("path");

const deleteProfileData = async(req,res) =>{
    try 
    {
        const response = await Profile.findOneAndDelete(req.params);

        if(response === null) return res.status(402).json({message: 'id does not exist'})
        // or if(!response) return....    
 
        //return true or false if file exist.(when it assign in var and console)    
        if(fs.existsSync(path.join('src', 'uploads', response.thumbnail))){
            fs.unlinkSync(path.join('src', 'uploads', response.thumbnail))
        };
    
        if(fs.existsSync(path.join('src', 'uploads', response.logo))){
            fs.unlinkSync(path.join('src', 'uploads', response.logo))
        };
        
        if(fs.existsSync(path.join('src', 'uploads', response.favicon))){
            fs.unlinkSync(path.join('src', 'uploads', response.favicon))
        };

        if(fs.existsSync(path.join('src', 'uploads', response.profilepic))){
            fs.unlinkSync(path.join('src', 'uploads', response.profilepic))
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

module.exports = deleteProfileData;