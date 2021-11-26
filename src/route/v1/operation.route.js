const express = require('express');
const router = express.Router();
const operationController = require('../../controller/operation.controller');
router.get('/getcounties', operationController.getCountries);
router.get('/getcurrencies', operationController.getCurrencies);
router.get('/getcurrency/:countryid', operationController.getCurrency);
router.get('/getstate/:countryid', operationController.getState);
router.get('/:countryid/:stateid', operationController.getCity);
router.get('/status', operationController.getStatus);
router.get('/getpayment', operationController.getpayment);
// router.get('/:userId', userController.getUserById); //userId validation


module.exports = router;