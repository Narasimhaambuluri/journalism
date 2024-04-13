const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.session.token;
    console.log('Header token here ',token)
    if (!token) return res.redirect('/login');
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.redirect('/login');
    }
};

module.exports = authenticateToken