const Usuario = require('../models/Usuarios');

module.exports = {
    home(_, res){
        res.render('index');
    },
    async autenticar(req, res){
        const dadosForm = req.body;

        const usuario = dadosForm.email;

    await Usuario.find({ email : usuario}, function(err,result){
        if(result[0] !== undefined){
            req.session.autorizado = true;
            req.session.email = result[0].email
        }
        if(req.session.autorizado){
            res.redirect('listas');
        } else {
            res.render('index');
        }

    })
    }
}

