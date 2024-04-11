require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 5000 || process.env.port

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayout);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/',require('./server/routes/users'));
app.use('/',require('./server/routes/home'));
app.use('/',require('./server/routes/journal'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})