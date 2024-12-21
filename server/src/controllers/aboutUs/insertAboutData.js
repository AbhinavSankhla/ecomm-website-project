
const insertAboutData = async(req,res) => {
    try {
        // // const { name, facebook, insta, youtube, x, whatsapp,featured_title, contactnum, email, address, weekday_time, weekend_time, about_heading, about_para1, about_para2}= req.body;

        // const img1 = req.files.img1[0].filename
        // const img2 = req.files.img2[0].filename
        // const img3 = req.files.img3[0].filename
        
        console.log(req.body);
        // console.log(img1, img2, img3);

        // // Check if a profile already exists in the database
        // const existingProfile = await Profile.findOne();

        // if (existingProfile) {
        //     // If a profile exists, return an error or update the existing one
        //     return res.status(400).json({
        //         message: "Profile already exists. Only one profile data is allowed.",
        //     });
        // }
        
        // const dataToInsert = new Profile({
        //     name, facebook, insta, youtube, x, whatsapp, contactnum,featured_title, email, address, weekday_time, weekend_time, about_heading, about_para1, about_para2,thumbnail,logo,favicon,profilepic,about_img
        // })
 
        // const response = await dataToInsert.save()
        res.status(200).json({message: 'data inserted successfully'});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = insertAboutData;