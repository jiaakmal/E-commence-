/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const crypto = require('crypto');

admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// Example function
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createPayFastPayment = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { amount, item_name, item_description, email_address } = req.body;

    const merchant_id = 'your-merchant-id'; // Replace with your PayFast Merchant ID
    const merchant_key = 'your-merchant-key'; // Replace with your PayFast Merchant Key
    const passphrase = 'your-passphrase'; // Replace with your PayFast Passphrase

    const data = {
      merchant_id,
      merchant_key,
      return_url: 'https://your-app.com/success',
      cancel_url: 'https://your-app.com/cancel',
      notify_url: 'https://your-app.com/notify',
      name_first: 'First Name',
      name_last: 'Last Name',
      email_address,
      m_payment_id: 'unique-payment-id', // Unique payment ID
      amount,
      item_name,
      item_description,
    };

    // Create the signature
    const signatureString = Object.keys(data)
      .map((key) => `${key}=${encodeURIComponent(data[key])}`)
      .join('&') + `&passphrase=${passphrase}`;

    const signature = crypto.createHash('md5').update(signatureString).digest('hex');

    data.signature = signature;

    res.status(200).send(data);
  });
});
