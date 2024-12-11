require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const reqPayment = async(req,res) => {
    try {
        console.log(req.body)
        const lineItems = req.body.data.map((cart_item) => ({
            price_data : {
                currency : 'inr',
                product_data : {
                    name : cart_item.name,
                    images: [cart_item.thumbnail]
                    // image : cart_item.thumbnail,
                    // images : [cart_item.images]
                },
                //*100 to convert paisa into rupee cuz currency is inr
                unit_amount : cart_item.price*100,
            },
            quantity : 1
        }))

        const customer = await stripe.customers.create({
            name : 'Peter Parker',
            address : {
                line1 : '5100 Broadway',
                line2 : 'colombia st.',
                city : 'Jodhpur',
                state : 'Rajasthan',
                postal_code : '11224',
                country : 'IN'

            }
        });
        console.log(customer)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/paymentSuccess',
            cancel_url: 'http://localhost:3000/paymentFailer',
            customer: customer.id
        })
        console.log(session)

        res.status(200).json({message : "done", session : session.id});

    } catch (error) {
        console.log(error)
        res.status(500).json({message : "internal server error"})
    }
}
module.exports = reqPayment;