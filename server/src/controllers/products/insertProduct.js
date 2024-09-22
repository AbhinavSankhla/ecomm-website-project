
const insertProduct = async(req,res) => {
    try {
        res.status(200).json({message: 'product inserted successfully'});
    } catch (error) {
        res.status(500).json({message: 'internal server error'});
        console.log(error)
    }
}

module.exports = insertProduct;