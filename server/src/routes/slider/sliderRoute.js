const express = require('express');
const upload = require('../../middleware/multer/multer');
const uploadMiddleware = upload('slider'); // Pass 'profile' as the module



const sliderRoutes = express.Router();

// profileRoutes.post('/insertProfileData', uploadMiddleware, insertProfileData);
// profileRoutes.get('/readProfileData', readProfileData);
// profileRoutes.delete('/deleteProfileData/:_id', deleteProfileData);
// profileRoutes.put('/update_profiledata',uploadMiddleware,updateProfileData);

module.exports = sliderRoutes;