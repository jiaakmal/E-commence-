/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { https, config } from 'firebase-functions';
createStripe.checkout = https.onCall(async (data, context) => {

    const stripe = require('stripe')(config().stripe.secret_key); // stripe secret key
const session = await stripe.checkout.sessions.create({
       payment_method_types: ['card'],
       mode: 'payment',
       success_url: 'https://example.com/success',
         cancel_url: 'https://example.com/cancel',
         line_items: [
           {
           
             price_data: {
               currency: 'Rs',
               product_data: {
                 name: 'T-shirt',
               },
               unit_amount: 2000,
             },
             quantity: 1,
           },
         ],

});
return {
    id: session.id
}
});

