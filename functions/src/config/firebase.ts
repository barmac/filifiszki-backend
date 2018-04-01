import admin = require('firebase-admin');
import functions = require('firebase-functions');

const config: { firebase } = functions.config();

admin.initializeApp(config.firebase);

export {
  admin,
  config,
  functions
}
