
exports.getForumPage = async(req,res) =>{
    const info = {
        title: 'Community Forum',
        description: 'Community content'
    }
    res.render('forum', info);
}