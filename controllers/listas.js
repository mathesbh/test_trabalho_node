const Lista = require('../models/Listas');
const Tarefa = require('../models/Tarefas');

module.exports = {
    async listas(req, res){
        if(req.session.autorizado !== true) return res.render('index', { acesso : true})    
            const email = req.session.email
        await Lista.find({ email : email}, (_, listas)=>{ 
            res.render('listas', { listas })
        })      
    },

    async criarLista(req, res){
        const email = req.session.email

        await Lista.create({
            email,
            nomeLista : req.body.nomeLista,
        })
    
            res.redirect('/listas')
    },

    async removerLista(req, res){
        const id = req.params.idLista
        await Tarefa.deleteMany({ idLista : id })
        
        await Lista.findByIdAndRemove({_id : id})
            
            res.redirect('/listas')
    },

    async editarLista(req, res){
        const id = req.params.idLista
        const nomeLista = req.query.nomeLista
        
        if(nomeLista == '') return res.redirect('/listas')
        
        await Lista.findByIdAndUpdate({ _id: id }, { nomeLista})
            res.redirect('/listas')
    },

    sair(req, res){
        req.session.destroy()
            res.render('index', { deslogado : true })
    }

     

}