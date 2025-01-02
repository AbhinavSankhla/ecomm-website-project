// const Slider = require("../../models/slider/Slider");

// const fs = require("fs");
// const path = require("path");

// const deleteSlider = async(req,res) =>{
//     try 
//     {
//         const response = await Slider.findOneAndDelete(req.params);

//         console.log(req.params)

//         if(response === null) return res.status(402).json({message: 'id does not exist'})
//         // or if(!response) return....    
 
//         //return true or false if file exist.(when it assign in var and console)    
//         if(fs.existsSync(path.join('src', 'uploads', response.img1))){
//             fs.unlinkSync(path.join('src', 'uploads', response.img1))
//         };

//         if(fs.existsSync(path.join('src', 'uploads', response.img2))){
//             fs.unlinkSync(path.join('src', 'uploads', response.img2))
//         };

//         if(fs.existsSync(path.join('src', 'uploads', response.img3))){
//             fs.unlinkSync(path.join('src', 'uploads', response.img3))
//         };

//         if(fs.existsSync(path.join('src', 'uploads', response.img4))){
//             fs.unlinkSync(path.join('src', 'uploads', response.img4))
//         };

//         if(fs.existsSync(path.join('src', 'uploads', response.img5))){
//             fs.unlinkSync(path.join('src', 'uploads', response.img5))
//         };

//         res.status(200).json({message: 'data deleted successfully', data:response})
//     } 
//     catch (error) 
//     {
//         console.log(error)
//         if(error.reason) return res.status(400).json({message: 'invalid product id'}) 
//         res.status(500).json({message: 'internal server error'})
//     }
// }

// module.exports = deleteSlider;


const Slider = require("../../models/slider/Slider");
const fs = require("fs");
const path = require("path");

const deleteSlider = async (req, res) => {
    try {
        const response = await Slider.findOneAndDelete(req.params);

        console.log(req.params);

        if (response === null) return res.status(402).json({ message: 'ID does not exist' });
        // or if (!response) return....    

        // Helper function to delete a file if it exists
        const deleteFile = (filePath) => {
            if (filePath && fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        };

        // Construct the paths and delete the files
        deleteFile(path.join('src', 'uploads', response.img1));
        deleteFile(path.join('src', 'uploads', response.img2));
        deleteFile(path.join('src', 'uploads', response.img3));
        deleteFile(path.join('src', 'uploads', response.img4));
        deleteFile(path.join('src', 'uploads', response.img5));

        res.status(200).json({ message: 'Data deleted successfully', data: response });
    } catch (error) {
        console.log(error);
        if (error.reason) return res.status(400).json({ message: 'Invalid product ID' });
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = deleteSlider;
