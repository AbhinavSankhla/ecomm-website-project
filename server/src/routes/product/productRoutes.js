const express = require('express');

const upload = require('../../middleware/multer/multer');

const { insertProduct, 
        readProducts, 
        deleteProduct,
        updateProduct    
        } = require('../../controllers/controllers');

//create an router
const productRoutes = express.Router()

productRoutes.post('/insert_product',upload ,insertProduct);
productRoutes.get('/read_product', readProducts);
productRoutes.delete('/delete_product/:_id', deleteProduct);
productRoutes.put('/update_product/:_id',upload, updateProduct);

module.exports = productRoutes;