const Forum = require('../models/Forum');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



exports.getForumPage = async(req,res) =>{
    const decodedToken = jwt.verify(req.session.token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    const posts = await Forum.find();
    const info = {
        title: 'Community Forum',
        description: 'Community content',
        token: decodedToken,
        posts:posts
    }
    res.render('forum', info);
}

exports.postForumPost = async(req,res,image)=>{
    console.log(req.body)
    console.log(image)
}