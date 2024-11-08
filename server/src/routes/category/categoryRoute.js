const express = require('express');

const { insertCategory, 
        readCategory,
        deleteCategory,
        changeCatStatus,
        trueCategory,
        searchCategory,
        updateCategory,
        readSingleCategory, 
        } = require('../../controllers/controllers');

//create an router
const categoryRoutes = express.Router()

categoryRoutes.post('/insert_category', insertCategory);
categoryRoutes.get('/read_category', readCategory);
categoryRoutes.delete('/delete_category/:_id', deleteCategory);
categoryRoutes.put('/change_category_status', changeCatStatus);
categoryRoutes.get('/true_category', trueCategory);
categoryRoutes.get('/search_category/:key', searchCategory);
categoryRoutes.get('/fetch_category_with_id/:_id', readSingleCategory);
categoryRoutes.put('/update_category/:_id', updateCategory);


module.exports = categoryRoutes;