const Usuario = require('../models/Usuarios');

module.exports = {
    home(_, res){
        res.render('index')
    },
    async autenticar(req, res){
        const dadosForm = req.body
        
    await Usuario.findOne({ email : dadosForm.email, senha: dadosForm.senha }, (err,user) =>{      
        if(!user) return res.render('index', { errLogin: true })
            req.session.autorizado = true
            req.session.email = user.email
            res.redirect('listas')
    })
    }
}

