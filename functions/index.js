const { functions } = require('./config/firebase');
const app = require('./app');

exports.api = functions.https.onRequest(app);
