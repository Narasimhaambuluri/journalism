
exports.getHomePage = async(req,res) =>{
    const info = {
        title: 'Home',
        description: 'Homepage content',
        token: req.session.token
    }
    res.render('home', info);
}