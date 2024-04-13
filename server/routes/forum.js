const express = require('express');
const router = express.Router()
const forumControler = require('../controllers/ForumController')

router.get('/forum', forumControler.getForumPage);

module.exports = router