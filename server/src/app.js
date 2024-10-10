const express = require('express');
require('./database/config');
const productRoutes = require('./routes/product/productRoutes');
const categoryRoutes = require('./routes/category/categoryRoute');
const subcategoryRoutes = require('./routes/subCategory/subCategoryRoutes');

// const allRoutes = express.Router();
//or
const allRoutes = express.Router();

allRoutes.use('/product', productRoutes);
allRoutes.use('/category', categoryRoutes);
allRoutes.use('/subcategory', subcategoryRoutes);

module.exports = allRoutes;