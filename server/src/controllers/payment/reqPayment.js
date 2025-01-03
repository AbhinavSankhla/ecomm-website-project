require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const reqPayment = async(req,res) => {
    try {
        console.log(req.body.data)
        const data = req.body.data
        const lineItems = req.body.data.map((cart_item) => ({
            price_data : {
                currency : 'inr',
                product_data : {
                    name : cart_item.name,
                    description : cart_item.description,
                    images: [cart_item.thumbnail]
                    // image : cart_item.thumbnail,
                    // images : [cart_item.images]
                },
                //*100 to convert paisa into rupee cuz currency is inr
                unit_amount : cart_item.price*100,
            },
            quantity : cart_item.qnt || 1 
        }))

        const customer = await stripe.customers.create({
            name: data[0].cust_name, // Correct key for customer name
            address: {
                line1: data[0].line1, // Required
                line2: data[0].line2, // Optional
                city: data[0].city, // Required
                state: data[0].state, // Required
                postal_code: data[0].postal_code, // Required
                country: data[0].country // Required
            }
        });
        
        // console.log(customer)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/paymentSuccess',
            cancel_url: 'http://localhost:3000/paymentFailed',
            customer: customer.id
        })
        // console.log(session)

        res.status(200).json({message : "done", session : session.id});

    } catch (error) {
        console.log(error)
        res.status(500).json({message : "internal server error"})
    }
}
module.exports = reqPayment;