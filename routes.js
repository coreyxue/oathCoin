var express = require('express');

var router = express.Router();

var customerCtrl = require('./controllers/customer');
router.route('/customers').post(customerCtrl.create).get(customerCtrl.list);

var transactionCtrl = require('./controllers/transaction');
router.route('/transactions').post(transactionCtrl.create).get(transactionCtrl.list);

var blockCtrl = require('./controllers/block');
router.route('/blocks').get(blockCtrl.list);
module.exports = router;