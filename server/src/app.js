const express = require('express');
require('./database/config');

const productRoutes = require('./routes/product/productRoutes');
const categoryRoutes = require('./routes/category/categoryRoute');
const subcategoryRoutes = require('./routes/subCategory/subCategoryRoutes');
const adminRoutes = require('./routes/admin/adminRoutes');
const otpRouter = require('./routes/otp/otp');
const userRoutes = require('./routes/users/users');
const paymentRoutes = require('./routes/payment/paymentRoute');
const profileRoutes = require('./routes/profile/profileRoute');
// const verifyJWT = require('./middleware/JWT/jwtVerifier');

// const allRoutes = express.Router();
//or
const allRoutes = express.Router();
// const verifyRoutes = express.Router();
// verifyRoutes.use(verifyJWT)

allRoutes.use('/product', productRoutes);
allRoutes.use('/category', categoryRoutes);
allRoutes.use('/subcategory', subcategoryRoutes);
allRoutes.use('/admin', adminRoutes);
allRoutes.use('/otp', otpRouter);
allRoutes.use('/users', userRoutes);
allRoutes.use('/payment', paymentRoutes);
allRoutes.use('/profile', profileRoutes)

// allRoutes.use('/',verifyRoutes)


module.exports = allRoutes;