const Usuario = require('../models/Usuarios');


module.exports = {
    cadastro(req,res){
        res.render('cadastro')
    },
    async cadastrar(req,res){
        const dadosForm = req.body;
    await Usuario.find({email: dadosForm.email}, function(err, result){
        if(result[0]) return res.render('cadastro', { errEmail: true, email: dadosForm.email, nome: dadosForm.nome })

        Usuario.create(dadosForm)
        res.render('index', { cadastrado: true, nome: dadosForm.nome, emailUser: dadosForm.email, email: true })
    })
    }
}

