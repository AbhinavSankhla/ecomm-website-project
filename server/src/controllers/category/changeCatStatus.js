const Category = require("../../models/Category/Category");

const changeCatStatus = async(req,res) => {
    try {
        const response = await Category.updateOne(
            {
                _id: req.body.id
            },
            {
                $set: {
                    status: req.body.status
                }
            }
        );
        console.log(req.body);
        res.status(200).json({message : 'status updated successfully', data: response})
    } catch (error) {
        res.status(500).json({message : 'internal server error'})
        console.log(error)
    }
}

module.exports = changeCatStatus;