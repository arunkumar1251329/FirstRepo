const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');

const router = express.Router();

router.post('/otp/send', validate(authValidation.sendOtp), authController.sendOtp);
router.post('/otp/verify', validate(authValidation.verifyOtp), authController.verifyOtp);

module.exports = router;
