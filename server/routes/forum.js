const express = require('express');
const router = express.Router()
const forumControler = require('../controllers/ForumController')
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage: storage });

router.get('/forum', forumControler.getForumPage);
router.post('/forum', upload.single('image'), (req, res) => {
    forumControler.postForumPost(req, res, req.file.filename);
});

router.get('/comments', forumControler.getPostComments);
router.post('/comments', forumControler.postComment);

module.exports = router