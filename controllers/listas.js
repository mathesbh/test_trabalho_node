const Lista = require('../models/Listas');

module.exports = {
    async listas(req, res){
        if(req.session.autorizado !== true){
            res.send('Usuário precisa fazer login')
            return;
        } else {
            const email = req.session.email;
        await Lista.find({ email : email}, function(err, result){
            
            res.render('listas', {result});

            });
        }
        
    },

    async criarLista(req, res){
        const email = req.session.email

        await Lista.create({
            email,
            nomeList : req.body.nomeList,
            descricaoList : req.body.descricaoList
        });
    
            res.redirect('/listas')
    },

    removerLista(req, res){
       res.send('testando rota')
    }

     

}