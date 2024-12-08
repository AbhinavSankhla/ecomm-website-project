require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const reqPayment = async(req,res) => {
    try {
        console.log(req.body)

        const lineitems = req.body.data.map((cart_item) => ({
            price_data : {
                currency : 'inr',
                product_data : {
                    name : cart_item.name,
                    image : cart_item.thumbnail,
                    images : [cart_item.images]
                },     
            }
        }))

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            customer: customer.id
        })

        res.status(200).json({message : "done"});

    } catch (error) {
        console.log(error)
        res.status(500).json({message : "internal server error"})
    }
}

module.exports = reqPayment;