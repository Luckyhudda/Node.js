const express = require('express');
const { passwordChecker, emailChecker } = require('../middleware/middleware');
const { passwordController} = require('../controller/controller');
const { signup, login } = require('../controller/authController');
const router = express.Router();
router.post("/auth", emailChecker, passwordChecker, passwordController);


router.post('/signup', signup)
router.post('/login', login)

module.exports = router;