const express = require('express');
const router = express.Router()
const journalControler = require('../controllers/JournalController')

router.get('/journal/create', journalControler.getCreatePage);

module.exports = router