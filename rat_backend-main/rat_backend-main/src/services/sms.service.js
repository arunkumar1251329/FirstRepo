const httpStatus = require('http-status');
const config = require('../config/config');
const logger = require('../config/logger');
const ApiError = require('../utils/ApiError');

const twilioClient = require("twilio")(config.twilio.accountSid, config.twilio.authToken);


const sendOtp = async(phone) => {
  try{
    const result = twilioClient.verify.v2
            .services(config.twilio.verifySid)
            .verifications.create({ to: phone, channel: "sms" });
  }
  catch(e){
    logger.error(e);
    throw new ApiError(httpStatus.BAD_GATEWAY, 'Not able to send otp');
  }
};

const verifyOtp = async(phone, code) => {
  try{
    const result = await twilioClient.verify.v2
            .services(config.twilio.verifySid)
            .verificationChecks.create({ to: phone, code });
    return result.status === 'approved';
  }
  catch(e){
    logger.error(e);
  }
  return false;
};

module.exports = {
  sendOtp,
  verifyOtp
};
