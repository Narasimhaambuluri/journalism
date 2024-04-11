

exports.getRegisterPage = async(req,res) =>{
    const info = {
        title: 'Register',
        description: 'Registerpage content'
    }
    res.render('register', info);
}

exports.getLoginPage = async(req,res) =>{
        const info = {
            title: 'Login',
            description: 'Loginpage content'
        }
        res.render('login', info);
}