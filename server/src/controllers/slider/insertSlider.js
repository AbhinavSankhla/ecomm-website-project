const Slider = require("../../models/slider/Slider")


const insertSlider = async(req,res) => {
    try {

        const img1 = req.files.img1[0].filename
        const img2 = req.files.img2[0].filename
        const img3 = req.files.img3[0].filename
        const img4 = req.files.img4[0].filename
        const img5 = req.files.img5[0].filename
        
        console.log(img1,img2,img3,img4,img5);

        // Check if a slider already exists in the database
        const existingSlider = await Slider.findOne();

        if (existingSlider) {
            // If a slider exists, return an error or update the existing one
            return res.status(400).json({
                message: "sldier already exists. Only one profile data is allowed.",
            });
        }
        
        const dataToInsert = new Slider({
           img1,img2,img3,img4,img5
        })
 
        const response = await dataToInsert.save()
        res.status(200).json({message: 'data inserted successfully', data: response});
    } 
    catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = insertSlider;