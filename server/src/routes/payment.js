const express = require('express');
const { reqPayment } = require('../controllers/controllers');

const paymentRoutes = express.Router();

paymentRoutes.post('req_payment', reqPayment)

module.exports = paymentRoutes;