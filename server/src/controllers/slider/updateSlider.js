const Slider = require("../../models/slider/Slider");

const fs = require("fs");
const path = require("path");


const updateSlider = async(req,res) =>{
    try {
        
        //find console array and findOne console object.
        const ifExist = await Slider.findOne()
        if (!ifExist) return res.status(404).json({ message: 'data not found' })
        // console.log(ifExist)

        const data = {}

        if (req.files.img1 !== undefined) {
            data.img1 = req.files.img1[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img1))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img1))
            };
        }

        if (req.files.img2 !== undefined) {
            data.img2 = req.files.img2[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img2))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img2))
            };
        }

        if (req.files.img3 !== undefined) {
            data.img3 = req.files.img3[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img3))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img3))
            };
        }

        if (req.files.img4 !== undefined) {
            data.img4 = req.files.img4[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img4))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img4))
            };
        }

        if (req.files.img5 !== undefined) {
            data.img5 = req.files.img5[0].filename

            if (fs.existsSync(path.join('src', 'uploads', ifExist.img5))) {
                fs.unlinkSync(path.join('src', 'uploads', ifExist.img5))
            };
        }

        // if (req.files.logo !== undefined) {
        //     data.logo = req.files.logo[0].filename

        //     if (fs.existsSync(path.join('src', 'uploads', ifExist.logo))) {
        //         fs.unlinkSync(path.join('src', 'uploads', ifExist.logo))
        //     };
        // }

        const response = await Slider.updateOne(data);
        

        res.status(200).json({message : 'data updated successfully', data : response})
    }
     catch (error) {
        res.status(500).json({message : 'internal server error'})
        console.log(error)
    }
}

module.exports =  updateSlider;