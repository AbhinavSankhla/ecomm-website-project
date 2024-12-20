const Profile = require("../../models/profile/Profile");

const insertProfileData = async(req,res) => {
    try {
        const { name, facebook, insta, youtube, x, whatsapp,featured_title, contactnum, email, address, weekday_time, weekend_time, about_heading, about_para1, about_para2}= req.body;

        const thumbnail = req.files.thumbnail[0].filename
        const logo = req.files.logo[0].filename
        const favicon = req.files.favicon[0].filename
        const profilepic = req.files.profilepic[0].filename
        const about_img = req.files.about_img[0].filename
        
        // console.log(req.body);
        // console.log(thumbnail, logo, favicon, profilepic);

        // Check if a profile already exists in the database
        const existingProfile = await Profile.findOne();

        if (existingProfile) {
            // If a profile exists, return an error or update the existing one
            return res.status(400).json({
                message: "Profile already exists. Only one profile data is allowed.",
            });
        }
        
        const dataToInsert = new Profile({
            name, facebook, insta, youtube, x, whatsapp, contactnum,featured_title, email, address, weekday_time, weekend_time, about_heading, about_para1, about_para2,thumbnail,logo,favicon,profilepic,about_img
        })
 
        const response = await dataToInsert.save()
        res.status(200).json({message: 'data inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = insertProfileData;