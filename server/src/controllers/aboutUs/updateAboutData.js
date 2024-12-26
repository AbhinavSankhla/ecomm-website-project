const Aboutus = require("../../models/aboutus/aboutus");
const fs = require("fs");
const path = require("path");

const updateAboutData = async(req,res) =>{
    try {
        const { heading, location, content_1, content_2, subheading_sec1, content_3, content_4, line1, subheading_sec2, content_5, content_6, line2, subheading_sec3, content_7, content_8}= req.body;

        //find console array and findOne console object.
        const ifExist = await Aboutus.findOne()
        
        if (!ifExist) return res.status(404).json({ message: 'data not found' })
        // console.log(ifExist)

        const data = {
            uppersection: {
                heading, location, content_1, content_2, subheading_sec1, content_3, content_4
            },
            lowersection: {
                line1, subheading_sec2, content_5, content_6, line2, subheading_sec3, content_7, content_8
            },
        };

        if (req.files.img1 !== undefined) {
            data.img1 = req.files.thumbnail[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img1))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img1))
            };
        }

        if (req.files.img2 !== undefined) {
            data.logo = req.files.img2[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img2))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img2))
            };
        }

        if (req.files.img3 !== undefined) {
            data.img3 = req.files.favicon[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img3))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img3))
            };
        }
        const response = await Aboutus.updateOne(data);
        res.status(200).json({message : 'data updated successfully', data : response})
    }
     catch (error) {
        res.status(500).json({message : 'internal server error'})
        console.log(error)
    }
}

module.exports =  updateAboutData;