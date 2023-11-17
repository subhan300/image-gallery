const express = require('express');
const router = express.Router();
const subscriptionController = require('../controller/subscription');

router.post('/create-checkout-session', subscriptionController.postSubscription);
router.get('/get-subscription-by-userId/:id', subscriptionController.getSubscriptionByUserId);
router.post('/payment-success', subscriptionController.postCheckoutSuccess);
module.exports = router;
