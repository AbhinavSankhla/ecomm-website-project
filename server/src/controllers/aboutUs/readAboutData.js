const Aboutus = require("../../models/aboutus/aboutus");

const readAboutData = async (req,res) => {
    try {
        const response = await Aboutus.find();
        // response.thumbnail = `${req.protocol}://${req.get('host')}/uploads/${response.thumbnail}`;

        // Append filepath to thumbnail and other image fields
        const updatedResponse = response.map((item) => {
            return {
                ...item._doc, // Extract the document data from Mongoose object
                img1: `${req.protocol}://${req.get("host")}/uploads/${item.img1}`,

                img2: `${req.protocol}://${req.get("host")}/uploads/${item.img2}`,

                img3: `${req.protocol}://${req.get("host")}/uploads/${item.img3}`,
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

module.exports = readAboutData;