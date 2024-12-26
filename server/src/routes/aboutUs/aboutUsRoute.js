const express = require('express');
const upload = require('../../middleware/multer/multer');
const uploadMiddleware = upload('aboutUs'); // Pass 'aboutUs' as the module

const { readAboutData,
    insertAboutData, 
    deleteAboutData, 
    updateAboutData} = require('../../controllers/controllers');

const aboutUsRoutes = express.Router();

aboutUsRoutes.post('/insertAboutData', uploadMiddleware, insertAboutData );
aboutUsRoutes.get('/readAboutData', readAboutData);
aboutUsRoutes.delete('/deleteAboutData/:_id', deleteAboutData);
aboutUsRoutes.put('/updateAboutData',uploadMiddleware,updateAboutData);

module.exports = aboutUsRoutes;