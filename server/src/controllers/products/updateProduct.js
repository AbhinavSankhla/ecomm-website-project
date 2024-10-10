const updateProduct = async(req,res) =>{
    try {
        res.status(200).json({message : 'data updated successfully'})                
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'internal server error'})
    }
} 

module.exports = updateProduct;