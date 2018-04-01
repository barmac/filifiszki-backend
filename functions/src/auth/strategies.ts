import passportJs = require('passport');

import { Strategy as BearerStrategy } from 'passport-http-bearer';

import { admin } from '../config/firebase';

const STRATEGY_BEARER = 'bearer';

class AuthStrategies {
  constructor(
    private passport: passportJs.PassportStatic,
    private firebaseAdmin: any
  ) { }

  public init() {
    this.passport.use(new BearerStrategy((token, done) => this.authorizeToken(token, done)));
  }

  async authorizeToken(token: string, done: Function) {
    try {
      const decodedToken: admin.auth.DecodedIdToken = await admin.auth().verifyIdToken(token);

      return done(null, decodedToken, { scope: 'all' });
    } catch (error) {
      return done(null, false);
    }
  }
}

const auth = new AuthStrategies(passportJs, admin);
auth.init();

export const isAuthenticated = passportJs.authenticate(STRATEGY_BEARER, { session: false });
