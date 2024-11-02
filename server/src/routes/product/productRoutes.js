const express = require('express');
const upload = require('../../middleware/multer/multer');

const { insertProduct, 
        readProducts, 
        deleteProduct,
        updateProduct,    
        changeProductStatus,
        searchProduct
        } = require('../../controllers/controllers');

//create an router
const productRoutes = express.Router()

productRoutes.post('/insert_product',upload ,insertProduct);
productRoutes.get('/read_product', readProducts);
productRoutes.delete('/delete_product/:_id', deleteProduct);
productRoutes.put('/update_product/:_id',upload, updateProduct);
productRoutes.put('/change_product_status', changeProductStatus);
productRoutes.get('/search_product/:key', searchProduct);

module.exports = productRoutes;