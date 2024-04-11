
exports.getCreatePage = async(req,res) =>{
    const info = {
        title: 'CreateJournalEntry',
        description: 'CreateJournalEntrypage content'
    }
    res.render('newjournal', info);
}