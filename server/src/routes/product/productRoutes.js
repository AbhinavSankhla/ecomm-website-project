const express = require('express');
const upload = require('../../middleware/multer/multer');

const { insertProduct, 
        readProducts, 
        deleteProduct,
        updateProduct,    
        changeProductStatus,
        searchProduct,
        readSingleProduct,
        deleteMultiProduct
        } = require('../../controllers/controllers');

//create an router
const productRoutes = express.Router()

productRoutes.post('/insert_product',upload ,insertProduct);
productRoutes.get('/read_product', readProducts);
productRoutes.delete('/delete_product/:_id', deleteProduct);
productRoutes.put('/change_product_status', changeProductStatus);
productRoutes.get('/search_product/:key', searchProduct);
productRoutes.get('/fetch_product_with_id/:_id', readSingleProduct);
productRoutes.put('/update_product/:_id',upload, updateProduct);
productRoutes.delete('/delete_multi_product', deleteMultiProduct);


module.exports = productRoutes;