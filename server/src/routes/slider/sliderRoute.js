const express = require('express');
const upload = require('../../middleware/multer/multer');
const uploadMiddleware = upload('slider'); // Pass 'profile' as the module

const { insertSlider, 
    readSlider, 
    deleteSlider,
    updateSlider} = require('../../controllers/controllers');

const sliderRoutes = express.Router();

sliderRoutes.post('/insertSlider', uploadMiddleware, insertSlider);
sliderRoutes.get('/readSlider', readSlider);
sliderRoutes.delete('/deleteSlider/:_id', deleteSlider);
sliderRoutes.put('/update_slider',uploadMiddleware,updateSlider);

module.exports = sliderRoutes;