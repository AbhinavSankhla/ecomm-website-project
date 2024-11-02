const express = require ('express')

const {insertSubCategory, 
    readSubCategory,
    deleteSubCategory,
    changeSubCatStatus,
    trueSubCat,
    searchSubCategory
    } = require('../../controllers/controllers');

const subcategoryRoutes = express.Router()

subcategoryRoutes.post('/insert_subcategory', insertSubCategory);
subcategoryRoutes.get('/read_subcategory', readSubCategory);
subcategoryRoutes.delete('/delete_subcategory/:_id', deleteSubCategory);
subcategoryRoutes.put('/change_subcategory_status', changeSubCatStatus);
subcategoryRoutes.get('/true_subcategory', trueSubCat);
subcategoryRoutes.get('/search_subcategory/:key', searchSubCategory);

module.exports = subcategoryRoutes;