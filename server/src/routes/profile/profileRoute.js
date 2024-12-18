const express = require('express');
const upload = require('../../middleware/multer/multer');
const uploadMiddleware = upload('profile'); // Pass 'profile' as the module

const { insertProfileData, 
    readProfileData, 
    deleteProfileData} = require('../../controllers/controllers');

const profileRoutes = express.Router();

profileRoutes.post('/insertProfileData', uploadMiddleware, insertProfileData)
profileRoutes.get('/readProfileData', readProfileData)
profileRoutes.delete('/deleteProfileData/:_id', deleteProfileData);

module.exports = profileRoutes;