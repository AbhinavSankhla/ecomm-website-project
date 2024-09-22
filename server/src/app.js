const express = require('express');
const productRoutes = require('./routes/product/productRoutes');

// const allRoutes = express.Router();
//or
const allRoutes = express.Router();

allRoutes.use('/product', productRoutes);

module.exports = allRoutes;