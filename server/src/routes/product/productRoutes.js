const express = require('express');
const insertProduct = require('../../controllers/products/insertProduct');

//create an router
const productRoutes = express.Router()

productRoutes.post('/insert_product', insertProduct);

module.exports = productRoutes;