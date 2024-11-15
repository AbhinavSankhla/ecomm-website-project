const express = require('express');
require('./database/config');
const productRoutes = require('./routes/product/productRoutes');
const categoryRoutes = require('./routes/category/categoryRoute');
const subcategoryRoutes = require('./routes/subCategory/subCategoryRoutes');
const adminRoutes = require('./routes/admin/adminRoutes');
const otpRouter = require('./routes/otp/otp');

// const allRoutes = express.Router();
//or
const allRoutes = express.Router();

allRoutes.use('/product', productRoutes);
allRoutes.use('/category', categoryRoutes);
allRoutes.use('/subcategory', subcategoryRoutes);
allRoutes.use('/admin', adminRoutes);
allRoutes.use('/otp', otpRouter);

module.exports = allRoutes;