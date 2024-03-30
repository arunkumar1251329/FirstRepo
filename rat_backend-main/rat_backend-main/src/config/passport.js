const { Strategy: JwtStrategy } = require('passport-jwt');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const { User } = require('../models');

const jwtExtractor = (req) => {
  const jwt =
    req.cookies.Authorization || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
  return jwt;
};

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: jwtExtractor,
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
