//Admin Controllers
const registerAdmin = require('./admin/registerAdmin')
const adminLogin = require('./admin/adminLogin')

//Product Controllers
const insertProduct = require('./products/insertProduct')
const readProducts = require('./products/readProducts')
const deleteProduct = require('./products/deleteProduct')
const updateProduct = require('./products/updateProduct')
const trueProducts = require('./products/trueProducts')

//category controllers
const insertCategory = require('./category/insertCategory')
const readCategory = require('./category/readCategories')
const deleteCategory = require('./category/deleteCategory')
const changeCatStatus = require('./category/changeCatStatus')
const trueCategory = require('./category/trueCategory')

//subCategory controllerse
const insertSubCategory = require('./subCategory/insertSubCategory')
const readSubCategory = require('./subCategory/readSubCategory')
const deleteSubCategory = require('./subCategory/deleteSubCategory')
const changeSubCatStatus = require('./subCategory/changeSubCatStatus')
const trueSubCat = require('./subCategory/trueSubCat')

module.exports = {
    registerAdmin,
    adminLogin,
    insertProduct,
    readProducts,
    deleteProduct,
    updateProduct,
    trueProducts,
    insertCategory,
    readCategory,
    changeCatStatus,
    trueCategory,
    deleteCategory,
    insertSubCategory,
    readSubCategory,
    deleteSubCategory,
    changeSubCatStatus,
    trueSubCat
}