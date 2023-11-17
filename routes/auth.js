const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');
router.post('/login', auth.userLogin);
router.post('/signup', auth.userSignUp);
module.exports = router;
