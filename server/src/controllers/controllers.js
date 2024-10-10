//Product Controllers
const deleteProduct = require('./products/deleteProduct')
const insertProduct = require('./products/insertProduct')
const readProducts = require('./products/readProducts')
const updateProduct = require('./products/updateProduct')

//category controllers
const insertCategory = require('./category/insertCategory')
const readCategory = require('./category/readCategories')
const deleteCategory = require('./category/deleteCategory')

//subCategory controllerse
const insertSubCategory = require('./subCategory/insertSubCategory')
const readSubCategory = require('./subCategory/readSubCategory')
const deleteSubCategory = require('./subCategory/deleteSubCategory')


module.exports = {
    insertProduct,
    readProducts,
    deleteProduct,
    updateProduct,
    insertCategory,
    readCategory,
    deleteCategory,
    insertSubCategory,
    readSubCategory,
    deleteSubCategory
}