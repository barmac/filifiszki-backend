const admin = require('firebase-admin');
const functions = require('firebase-functions');

const config = functions.config();

admin.initializeApp(functions.config().firebase);

module.exports = {
  admin,
  config,
  functions
}
