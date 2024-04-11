
const express = require('express');
const router = express.Router()
const userController = require('../controllers/UserController')

router.get('/login', userController.getLoginPage);

router.get('/register', userController.getRegisterPage);

module.exports = router