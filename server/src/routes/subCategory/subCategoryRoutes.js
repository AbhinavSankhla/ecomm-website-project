const express = require ('express')

const {insertSubCategory, 
    readSubCategory,
    deleteSubCategory
    } = require('../../controllers/controllers');

const subcategoryRoutes = express.Router()

subcategoryRoutes.post('/insert_subcategory', insertSubCategory);
subcategoryRoutes.get('/read_subcategory', readSubCategory);
subcategoryRoutes.delete('/delete_subcategory/:_id', deleteSubCategory);

module.exports = subcategoryRoutes;