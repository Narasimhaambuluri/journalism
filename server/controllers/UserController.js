const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.getRegisterPage = async(req,res) =>{
    const info = {
        title: 'Register',
        description: 'Registerpage content',
        token:''
    }
    res.render('register', info);
}

exports.getLoginPage = async(req,res) =>{
        const info = {
            title: 'Login',
            description: 'Loginpage content',
            token:''
        }
        res.render('login', info);
}


exports.registerNewUser = async(req,res) =>{
   console.log(req.body)
   const salt = await bcrypt.genSalt();
   const hash = await bcrypt.hash(req.body.password, salt);
   const newUser = new User({
      email:req.body.email,
      fullName:req.body.fullname,
      password:req.body.password,
      username:req.body.email,
      hash:hash,
      salt:salt
   })
   try {
    await User.create(newUser)
    res.redirect('/login')
   } catch (error) {
    console.log(error)
   }
}

exports.loginUser = async(req,res)=>{
   console.log(req.body)
   try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).redirect('/register');
    const isValidPassword = await bcrypt.compare(password, user.hash);
    if (!isValidPassword) return res.status(400).redirect('/login');
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    req.session.token = token;
    return res.redirect('/');
} catch (error) {
    res.status(500).send('Error logging in');
}
}


exports.logoutUser = async(req,res)=>{
    delete req.session.token;
    return res.redirect('/login');
 }