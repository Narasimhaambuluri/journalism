const Mood = require('../models/Mood');
const Journal = require('../models/Journal');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

exports.getHomePage = async(req,res) =>{
    const decodedToken = jwt.verify(req.session.token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    const journalEntries = await Journal.find({ userId: userId }).limit(3);
    const info = {
        title: 'Home',
        description: 'Homepage content',
        token: req.session.token,
        journals:journalEntries
    }
    res.render('home', info);
}

exports.postMood = async(req,res)=>{
    const decodedToken = jwt.verify(req.session.token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    const { mood } = req.body;
    const newMood = new Mood({
        userId:userId,
        mood: mood,
    })
    try {
        await Mood.create(newMood)
        const info = {
            title: 'Home',
            description: 'Home content',
            token: decodedToken
        }
        res.render('home',info)
    } catch (error) {
        console.log(error)
    }
}