import { functions } from './config/firebase';
import app from './app';

export const api = functions.https.onRequest(app)
