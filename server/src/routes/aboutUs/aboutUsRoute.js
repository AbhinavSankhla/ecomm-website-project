const express = require('express');
const upload = require('../../middleware/multer/multer');
const uploadMiddleware = upload('aboutUs'); // Pass 'aboutUs' as the module

const aboutUsRoutes = express.Router();

aboutUsRoutes.post('/insertAboutData', uploadMiddleware );
// profileRoutes.get('/readProfileData', readProfileData);
// profileRoutes.delete('/deleteProfileData/:_id', deleteProfileData);
// profileRoutes.put('/update_profiledata',uploadMiddleware,updateProfileData);

module.exports = aboutUsRoutes;