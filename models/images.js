var mongoose = require('mongoose');
var Upload = new mongoose.Schema({
    images: {
        type: [
            {
                originalname: {
                    type: String,
                    required: true,
                },
                location: {
                    type: String,
                    required: true,
                },
            }
        ],
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    tags: {
        type: [String],
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = new mongoose.model('upload', Upload);
