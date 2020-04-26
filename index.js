/**
 * Background Cloud Function to be triggered by Pub/Sub.
 * This function is exported by index.js, and executed when
 * the trigger topic receives a message.
 *
 * @param {object} data The event payload.
 * @param {object} context The event metadata.
 */
exports.helloPubSub = (data, context) => {
  const pubSubMessage = data;
  const name = pubSubMessage.data
    ? Buffer.from(pubSubMessage.data, 'base64').toString()
    : 'World';

  console.log(`Hello there I got my CI done, ${name}!`);

  //save to firestore
  
  const admin = require('firebase-admin');  

  if (!admin.apps.length) {
    admin.initializeApp({});
  }
 
  let db = admin.firestore();

  let docRef = db.collection('users').doc('alovelace2');

  let setAda = docRef.set({
    first: 'PubSub',
    last: 'LoveFirst',
    born: 1915
});

};