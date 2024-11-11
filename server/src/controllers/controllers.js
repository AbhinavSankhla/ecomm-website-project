//Admin Controllers
const registerAdmin = require('./admin/registerAdmin')
const adminLogin = require('./admin/adminLogin')

//Product Controllers
const insertProduct = require('./products/insertProduct')
const readProducts = require('./products/readProducts')
const deleteProduct = require('./products/deleteProduct')
const updateProduct = require('./products/updateProduct')
const trueProducts = require('./products/trueProducts')
const changeProductStatus = require('./products/changeProductStatus')
const readSingleProduct = require('./products/readSingleProduct')
const searchProduct = require('./products/searchProduct')

//category controllers
const insertCategory = require('./category/insertCategory')
const readCategory = require('./category/readCategories')
const deleteCategory = require('./category/deleteCategory')
const changeCatStatus = require('./category/changeCatStatus')
const trueCategory = require('./category/trueCategory')
const readSingleCategory = require('./category/readSingleCategory')
const updateCategory = require('./category/updateCategory')
const searchCategory = require('./category/searchCategory')
const deleteMultiCat = require('./category/deleteMultiCat')


//subCategory controllerse
const insertSubCategory = require('./subCategory/insertSubCategory')
const readSubCategory = require('./subCategory/readSubCategory')
const deleteSubCategory = require('./subCategory/deleteSubCategory')
const changeSubCatStatus = require('./subCategory/changeSubCatStatus')
const trueSubCat = require('./subCategory/trueSubCat')
const searchSubCategory = require('./subCategory/searchSubCategory')
const readSingleSubCategory = require('./subCategory/readSingleSubCat')
const updateSubCategory = require('./subCategory/updateSubCategory')
const deleteMultiSubCat = require('./subCategory/deleteMultiSubCat')
const deleteMultiProduct = require('./products/deleteMultiProduct')

module.exports = {
    registerAdmin,
    adminLogin,
    insertProduct,
    readProducts,
    deleteProduct,
    deleteMultiProduct,
    updateProduct,
    trueProducts,
    changeProductStatus,
    searchProduct,
    readSingleProduct,
    insertCategory,
    readCategory,
    changeCatStatus,
    trueCategory,
    deleteCategory,
    deleteMultiCat,
    searchCategory,
    updateCategory,
    readSingleCategory,
    insertSubCategory,
    readSubCategory,
    deleteSubCategory,
    changeSubCatStatus,
    trueSubCat,
    searchSubCategory,
    readSingleSubCategory,
    updateSubCategory,
    deleteMultiSubCat
}