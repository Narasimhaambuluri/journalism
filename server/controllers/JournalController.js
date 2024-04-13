
exports.getCreatePage = async(req,res) =>{
    const info = {
        title: 'CreateJournalEntry',
        description: 'CreateJournalEntrypage content',
        token: req.session.token
    }
    res.render('newjournal', info);
}