const Profile = require("../../models/profile/Profile");

const readProfileData = async (req, res) => {
    try {
        const response = await Profile.find();
        // response.thumbnail = `${req.protocol}://${req.get('host')}/uploads/${response.thumbnail}`;

        // Append filepath to thumbnail and other image fields
        const updatedResponse = response.map((item) => {
            return {
                ...item._doc, // Extract the document data from Mongoose object
                thumbnail: `${req.protocol}://${req.get("host")}/uploads/${item.thumbnail}`,

                logo: `${req.protocol}://${req.get("host")}/uploads/${item.logo}`,

                favicon: `${req.protocol}://${req.get("host")}/uploads/${item.favicon}`,

                profilepic: `${req.protocol}://${req.get("host")}/uploads/${item.profilepic}`,
                
                about_img: `${req.protocol}://${req.get("host")}/uploads/${item.about_img}`,
            };
        });

        const filepath = `${req.protocol}://${req.get('host')}/uploads`;

        res.status(200).json({message: 'data fetched successfully', data: updatedResponse, filepath})
    }    
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})      
    }
};

module.exports = readProfileData;