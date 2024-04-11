
exports.getHomePage = async(req,res) =>{
    const info = {
        title: 'Home',
        description: 'Homepage content'
    }
    res.render('home', info);
}