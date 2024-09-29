const express = require('express');

const { insertCategory, 
        readCategory, 

        } = require('../../controllers/controllers');

//create an router
const categoryRoutes = express.Router()

categoryRoutes.post('/insert_category',insertCategory);
categoryRoutes.get('/read_category',readCategory);

module.exports = categoryRoutes;