const Profile = require("../../models/profile/Profile")
const fs = require("fs");
const path = require("path");


const updateProfileData = async(req,res) =>{
    try {
        const { name, facebook, insta, youtube, x, whatsapp, featured_title,contactnum, email, address, weekday_time, weekend_time, about_heading, about_para1, about_para2}= req.body;

        //find console array and findOne console object.
        const ifExist = await Profile.findOne()
        if (!ifExist) return res.status(404).json({ message: 'data not found' })
        // console.log(ifExist)

        const data = {
            name, facebook, insta, youtube, x, whatsapp,featured_title, contactnum, email, address, weekday_time, weekend_time, about_heading, about_para1, about_para2
        }

        if (req.files.thumbnail !== undefined) {
            data.thumbnail = req.files.thumbnail[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.thumbnail))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.thumbnail))
            };
        }

        if (req.files.logo !== undefined) {
            data.logo = req.files.logo[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.logo))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.logo))
            };
        }

        if (req.files.favicon !== undefined) {
            data.favicon = req.files.favicon[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.favicon))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.favicon))
            };
        }

        if (req.files.profilepic !== undefined) {
            data.profilepic = req.files.profilepic[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.profilepic))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.profilepic))
            };
        }

        if (req.files.about_img !== undefined) {
            data.about_img = req.files.about_img[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.about_img))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.about_img))
            };
        }

        const response = await Profile.updateOne(data);
        

        res.status(200).json({message : 'data updated successfully', data : response})
    }
     catch (error) {
        res.status(500).json({message : 'internal server error'})
        console.log(error)
    }
}

module.exports =  updateProfileData;