const express = require ('express')

const {insertSubCategory, 
    readSubCategory,
    deleteSubCategory,
    changeSubCatStatus,
    trueSubCat,
    searchSubCategory,
    readSingleSubCategory,
    updateSubCategory
    } = require('../../controllers/controllers');

const subcategoryRoutes = express.Router()

subcategoryRoutes.post('/insert_subcategory', insertSubCategory);
subcategoryRoutes.get('/read_subcategory', readSubCategory);
subcategoryRoutes.delete('/delete_subcategory/:_id', deleteSubCategory);
subcategoryRoutes.put('/change_subcategory_status', changeSubCatStatus);
subcategoryRoutes.get('/true_subcategory', trueSubCat);
subcategoryRoutes.get('/search_subcategory/:key', searchSubCategory);
subcategoryRoutes.get('/fetch_subcategory_with_id/:_id', readSingleSubCategory);
subcategoryRoutes.put('/update_subcategory/:_id', updateSubCategory);



module.exports = subcategoryRoutes;