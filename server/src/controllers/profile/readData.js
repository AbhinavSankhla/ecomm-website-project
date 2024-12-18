const Profile = require("../../models/profile/Profile");

const readProfileData = async(req,res) =>{
    try {
    
     
        const response = await Profile.find();
        const filepath = `${req.protocol}://${req.get('host')}/uploads`;

        res.status(200).json({message: 'data fetched successfully', data: response, filepath})
    }    
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readProfileData;