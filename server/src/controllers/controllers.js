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

//OTP Controller
const otpGenerator = require('./otp/otpGenerator')

//User Controllers
const registerUser = require('./users/registerUser')
const readUser = require('./users/readUser')
const deleteUser = require('./users/deleteUser')

//Payment Controller
const reqPayment = require('./payment/reqPayment')

//profile Controllers
const insertProfileData = require('./profile/insertProfileData')
const readProfileData = require('./profile/readData')
const deleteProfileData = require('./profile/deleteProfileData')
const updateProfileData = require('./profile/updateProfileData')

//about controllers
const insertAboutData = require('./aboutUs/insertAboutData')
const readAboutData = require('./aboutUs/readAboutData')
const updateAboutData = require('./aboutUs/updateAboutData')
const deleteAboutData = require('./aboutUs/deleteAboutData')


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
    deleteMultiSubCat,
    otpGenerator,
    registerUser,
    readUser,
    deleteUser,
    reqPayment,
    insertProfileData,
    readProfileData,
    deleteProfileData,
    updateProfileData,
    insertAboutData,
    readAboutData,
    updateAboutData,
    deleteAboutData
}