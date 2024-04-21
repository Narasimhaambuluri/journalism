const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./storage");

exports.getRegisterPage = async (req, res) => {
  const info = {
    title: "Register",
    description: "Registerpage content",
    token: "",
  };
  res.render("register", info);
};

exports.getLoginPage = async (req, res) => {
  const info = {
    title: "Login",
    description: "Loginpage content",
    token: "",
  };
  res.render("login", info);
};

exports.registerNewUser = async (req, res) => {
  console.log(req.body);
  // Check if the email already exists
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    // Redirect with error message if user already exists
    return res.redirect("/register?error=email_exists");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = new User({
    email: req.body.email,
    fullName: req.body.fullname,
    password: hashedPassword,
    username: req.body.email,
    hash: hashedPassword,
    salt: salt,
  });
  try {
    await User.create(newUser);
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    // Redirect with error message if user already exists
    return res.redirect("/register?error=register_failure");
  }
};

exports.loginUser = async (req, res) => {
  //    console.log(req.body)
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).redirect("/login?error=invalid_credentials");
    const isValidPassword = await bcrypt.compare(password, user.hash);
    if (!isValidPassword) return res.status(400).redirect("/login?error=invalid_credentials");
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    localStorage.setItem("AUTH_TOKEN", token);
    req.session.token = token;
    return res.redirect("/");
  } catch (error) {
    res.status(500).send("/login?error=login_error");
  }
};



exports.logoutUser = async (req, res) => {
  delete req.session.token;
  localStorage.removeItem("AUTH_TOKEN");
  return res.redirect("/login");
};
