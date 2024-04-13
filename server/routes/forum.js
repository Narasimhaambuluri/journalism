const express = require('express');
const router = express.Router()
const forumControler = require('../controllers/ForumController')

router.get('/', forumControler.getForumPage);

module.exports = router