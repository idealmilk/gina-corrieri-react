require("dotenv").config();

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("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");

const app = express();

app.use(cors({
  origin: true,
}));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  try {
    const {amount, shipping} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: "gbp",
    });

    res
        .status(200)
        .send(paymentIntent.client_secret);
  } catch (err) {
    res
        .status(500)
        .json({
          statusCode: 500,
          message: err.message,
        });
  }
});

app.get("*", (req, res) => {
  res
      .status(404)
      .send("404, Not Found.");
});

exports.api = functions.https.onRequest(app);
