
const reqPayment = async(req,res) => {
    try{
        res.status(200).json({message: 'done'})
    }
    catch(error){
        res.status(500).json({message: 'internal server error'})
    }
}

module.exports = reqPayment;