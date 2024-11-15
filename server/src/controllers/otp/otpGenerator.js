const otpGenerator = async() =>{
    try {
        res.status(200).json({message : 'otp sent to your mail'})        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'internal server error'})
    }

}

module.exports = otpGenerator;