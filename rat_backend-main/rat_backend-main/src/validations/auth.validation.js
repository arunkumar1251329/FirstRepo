const Joi = require('joi');
const { password } = require('./custom.validation');
const JoiExtended = Joi.extend( require('joi-phone-number') );

const sendOtp = {
  body: Joi.object().keys({
    phone: JoiExtended.string()
            .required()
            .phoneNumber(
              {
                defaultCountry:
                  'IN',
                format:
                  'e164',
                strict: true,
              }
            ),
  }),
};

const verifyOtp = {
  body: Joi.object().keys({
    phone: JoiExtended.string()
              .required()
              .phoneNumber(
                {
                  defaultCountry:
                    'IN',
                  format:
                    'e164',
                  strict: true,
                }
              ),
    otp: Joi.string().required()
  }),
};

// const register = {
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required().custom(password),
//     name: Joi.string().required(),
//   }),
// };

// const login = {
//   body: Joi.object().keys({
//     email: Joi.string().required(),
//     password: Joi.string().required(),
//   }),
// };

// const logout = {
//   body: Joi.object().keys({
//     refreshToken: Joi.string().required(),
//   }),
// };

// const refreshTokens = {
//   body: Joi.object().keys({
//     refreshToken: Joi.string().required(),
//   }),
// };

// const forgotPassword = {
//   body: Joi.object().keys({
//     email: Joi.string().email().required(),
//   }),
// };

// const resetPassword = {
//   query: Joi.object().keys({
//     token: Joi.string().required(),
//   }),
//   body: Joi.object().keys({
//     password: Joi.string().required().custom(password),
//   }),
// };

// const verifyEmail = {
//   query: Joi.object().keys({
//     token: Joi.string().required(),
//   }),
// };

module.exports = {
  sendOtp,
  verifyOtp,
};
