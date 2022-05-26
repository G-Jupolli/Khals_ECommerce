const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

require('dotenv').config();
const stripe = require('stripe')('sk_test_51L0qMeDLsIlVRysabqfSqS5iejTlR5K3mwgPEfHzKZhQOKb3KfdSpySpONGIJRYxevbytbwtd9n9pTC68tRNdgbJ00BQXiNBBK');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'gbp',
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);