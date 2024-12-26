const Aboutus = require("../../models/aboutus/aboutus");

const insertAboutData = async (req, res) => {
    try {
        const { 
            heading, location, content_1, content_2, subheading_sec1, content_3, content_4,
            line1, subheading_sec2, content_5, content_6, line2, subheading_sec3, content_7, content_8 
        } = req.body;

        if (!req.files || !req.files.img1 || !req.files.img2 || !req.files.img3) {
            return res.status(400).json({ message: 'All images (img1, img2, img3) are required.' });
        }

        const img1 = req.files.img1[0].filename;
        const img2 = req.files.img2[0].filename;
        const img3 = req.files.img3[0].filename;

        console.log(req.body, img1, img2, img3);

        // Check if an Aboutus document already exists
        const existingAboutData = await Aboutus.findOne();

        if (existingAboutData) {
            return res.status(400).json({
                message: "About data already exists. Only one about data is allowed.",
            });
        }

        // Prepare the data to insert
        const dataToInsert = new Aboutus({
            uppersection: {
                heading, location, content_1, content_2, subheading_sec1, content_3, content_4, img1,
            },
            lowersection: {
                line1, subheading_sec2, content_5, content_6, img2, line2, subheading_sec3, content_7, content_8, img3,
            },
        });

        const response = await dataToInsert.save();
        res.status(200).json({
            message: 'Data inserted successfully',
            data: response,
        });
    } catch (error) {
        console.error('Error inserting about data:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = insertAboutData;
