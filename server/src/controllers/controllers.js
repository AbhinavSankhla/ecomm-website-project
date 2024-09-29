//Product Controllers
const deleteProduct = require('./products/deleteProduct')
const insertProduct = require('./products/insertProduct')
const readProducts = require('./products/readProducts')
const updateProduct = require('./products/updateProduct')

//category controllers
const insertCategory = require('./category/insertCategory')
const readCategory = require('./category/readCategories')

module.exports = {
    insertProduct,
    readProducts,
    deleteProduct,
    updateProduct,
    insertCategory,
    readCategory
}