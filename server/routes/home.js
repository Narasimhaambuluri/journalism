const express = require('express');
const router = express.Router()
const homeControler = require('../controllers/HomeController')

router.get('/', homeControler.getHomePage);

module.exports = router