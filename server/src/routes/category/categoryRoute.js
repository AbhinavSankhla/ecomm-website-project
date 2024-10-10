const express = require('express');

const { insertCategory, 
        readCategory,
        deleteCategory, 
        } = require('../../controllers/controllers');

//create an router
const categoryRoutes = express.Router()

categoryRoutes.post('/insert_category', insertCategory);
categoryRoutes.get('/read_category', readCategory);
categoryRoutes.delete('/delete_category/:_id', deleteCategory);

module.exports = categoryRoutes;