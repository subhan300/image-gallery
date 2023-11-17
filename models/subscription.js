var mongoose = require('mongoose');
var Subscription = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: false,
    },
    userEmail: {
        type: String,
        required: false,
    },
    userName: {
        type: String,
        required: false,
    },
    sessionId: {
        type: String,
        required: false,
    },
    subscriptionId: {
        type: String,
        required: false,
    },
    mode: {
        type: String,
        required: false,
    },
    invoice: {
        type: String,
        required: false,
    },
    subscriptionId: {
        type: String,
        required: false,
    },
    startDate: {
        type: String,
        required: false,
    },
    endDate: {
        type: String,
        required: false,
    },
    durationInDays: {
        type: Number,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = new mongoose.model('subscription', Subscription);
