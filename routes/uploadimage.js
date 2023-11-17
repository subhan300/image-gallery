const express = require('express');
const router = express.Router();
const uploadImage = require('../controller/uploadImage');
router.post('/upload', uploadImage.upload.array('image', 1000), uploadImage.uploadImageController);
router.get('/getimage-bycategory/:category', uploadImage.getImagesByCategory)
router.get('/getimage-bytag/', uploadImage.getImagesByTag)
router.get('/downloadImage/', uploadImage.downloadImage)
module.exports = router;
