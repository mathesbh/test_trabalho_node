const Usuario = require('../models/Usuarios');


module.exports = {
    cadastro(req,res){
        res.render('cadastro');
    },
    async cadastrar(req,res){
        const dadosForm = req.body;
        
    await Usuario.create(dadosForm);

        res.send('podemos cadastrar')
    }
}

